# 🌾 KrishiSetu — Smart Farm-Gate Sales & Net-Price Discovery Platform

> **Smart India Hackathon (SIH) 2026 Prototype**
> Strengthening market linkages and price discovery for farmers through FPO aggregation, live bidding, and transparent net realization calculation.

---

## 🎯 Problem

Smallholder farmers in India sell produce at below-market prices due to:
- **Opaque pricing** — no visibility into real mandi rates
- **Individual selling** — high per-unit transport & handling costs
- **Middleman dependency** — arhatiya commissions eat into margins
- **No trust layer** — no way to verify buyer reliability

## 💡 Solution — KrishiSetu

KrishiSetu bridges the gap between farmers and buyers through:

| Feature | What It Does |
|---------|-------------|
| **Net Realization Engine** | Calculates true net return after all deductions — lets farmers compare mandi vs direct buyer vs FPO bulk sale |
| **FPO Aggregation** | Groups individual farmer lots into bulk lots for better negotiation power |
| **Live Bidding** | Real-time Socket.io bidding rooms where buyers compete transparently |
| **Multi-Criteria Recommendations** | Scores and ranks sale options based on price, trust, speed, and logistics |
| **Digital Trust Layer** | Buyer reliability scoring, QR traceability, grievance ticketing |
| **Payment Tracking** | Escrow-based payment flow with farmer payout splits |

### Demo Impact Numbers (20q Grade-A Onion, Nashik)

| Sale Option | Gross | Deductions | **Net** |
|-------------|-------|------------|---------|
| Nearby Mandi | ₹1,600/q | ₹20/q | ₹1,580/q |
| Direct Buyer | ₹1,950/q | ₹280/q | ₹1,670/q |
| **KrishiSetu FPO Bulk** ✅ | ₹1,950/q | ₹130/q | **₹1,820/q** |

> **+₹240/quintal advantage → +₹4,800 additional income for 20 quintals**

---

## 🛠️ Tech Stack

### Backend
| Technology | Purpose |
|-----------|---------|
| Node.js + Express.js | REST API server |
| Turso (libSQL) | Primary SQL database (edge-distributed SQLite) |
| MongoDB (Mongoose) | Bid histories, evidence logs |
| Socket.io | Real-time bidding rooms |
| JWT + OTP | Authentication |
| Razorpay (Sandbox) | Payment simulation |
| QRCode | Digital lot traceability |

### Frontend (Upcoming)
| Technology | Purpose |
|-----------|---------|
| React 18 + TypeScript | UI framework |
| Vite | Build tool |
| Tailwind CSS + shadcn/ui | Styling & components |
| Zustand | State management |
| Socket.io Client | Real-time bidding UI |
| Recharts | Data visualization |
| Workbox (PWA) | Offline support for farmers |

---

## 📁 Project Structure

```
krishisetu/
├── .gitignore
├── README.md
├── krishisetu-backend/
│   ├── config/
│   │   ├── turso.js              # Turso (libSQL) client setup
│   │   └── mongo.js              # MongoDB connection
│   ├── controllers/
│   │   ├── authController.js     # OTP + JWT auth flow
│   │   ├── farmerController.js   # Produce listing & summary
│   │   ├── fpoController.js      # Lot aggregation
│   │   ├── marketController.js   # Mandi prices & net realization
│   │   ├── recommendationController.js  # Sale recommendations
│   │   ├── buyerController.js    # Browse lots & transactions
│   │   ├── logisticsController.js # Delivery tracking
│   │   ├── paymentController.js  # Mock payment flow
│   │   ├── qrController.js       # QR generate & verify
│   │   └── grievanceController.js # Dispute ticketing
│   ├── middleware/
│   │   ├── auth.js               # JWT verification
│   │   └── roleCheck.js          # Role-based access control
│   ├── models/
│   │   ├── schema.sql            # Turso SQL schema (7 tables)
│   │   └── mongo/
│   │       ├── BidLog.js         # Real-time bid history
│   │       └── EvidenceLog.js    # Grievance evidence
│   ├── routes/                   # Express route definitions
│   ├── services/
│   │   ├── otpService.js         # OTP generate/store/verify
│   │   ├── authService.js        # JWT + user management
│   │   ├── marketPriceService.js # Mandi price data
│   │   ├── netRealizationEngine.js # 3-scenario net calculation
│   │   ├── recommendationEngine.js # Weighted scoring engine
│   │   ├── socketService.js      # Socket.io bidding rooms
│   │   ├── qrService.js          # QR code generate/verify
│   │   ├── paymentService.js     # Payment state machine
│   │   └── logisticsService.js   # Delivery state machine
│   ├── scripts/
│   │   └── seedDemoData.js       # Demo data seeder
│   ├── server.js                 # Entry point
│   ├── package.json
│   ├── package-lock.json
│   └── .env                      # Secrets (not in git)
└── krishisetu-frontend/          # (Coming soon)
```

---

## 🚀 Setup & Installation

### Prerequisites

- **Node.js** ≥ 18.x ([download](https://nodejs.org/))
- **npm** ≥ 9.x
- **Git** ([download](https://git-scm.com/))

### 1. Clone the Repository

```bash
git clone https://github.com/ssislive/krishisetu.git
cd krishisetu
```

### 2. Backend Setup

```bash
cd krishisetu-backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env   # (if .env.example exists)
# OR create .env manually with the variables below
```

### 3. Configure Environment Variables

Create `krishisetu-backend/.env`:

```env
PORT=5000
NODE_ENV=development

# Turso Database
TURSO_DATABASE_URL="libsql://your-db-name.turso.io"
TURSO_AUTH_TOKEN="your-turso-auth-token"

# MongoDB
MONGO_URI="mongodb+srv://user:pass@cluster.mongodb.net/krishisetu?retryWrites=true&w=majority"

# JWT
JWT_SECRET="your-super-secret-jwt-key-change-this"
JWT_EXPIRES_IN="7d"

# Razorpay (Sandbox)
RAZORPAY_KEY_ID="rzp_test_xxxxxxxx"
RAZORPAY_KEY_SECRET="your-razorpay-test-secret"

# Frontend URL (for CORS)
FRONTEND_URL="http://localhost:5173"
```

### 4. Start the Backend

```bash
# Development (auto-reload on file changes)
npm run dev

# OR Production
npm start
```

Server starts at `http://localhost:5000`

### 5. Seed Demo Data (Optional)

```bash
node scripts/seedDemoData.js
```

Pre-populates:
- 5 Farmers (Nashik, Pune, Ahmednagar)
- 2 FPOs, 3 Buyers, 1 Transporter
- 5 Farmer lots + 1 aggregated bulk lot (60q Onion)

---

## 📡 API Endpoints

### Auth Module
```
POST   /api/auth/send-otp          → Send OTP to phone
POST   /api/auth/verify-otp        → Verify OTP, get JWT
GET    /api/auth/me                 → Get profile (🔒)
```

### Farmer Module (🔒 FARMER role)
```
POST   /api/farmer/lots             → Create produce listing
GET    /api/farmer/lots/my-lots     → Get all my lots
GET    /api/farmer/summary          → Earnings & lot summary
```

### FPO Aggregation Module
```
GET    /api/fpo/available-lots      → Browse farmer lots (🔒)
POST   /api/fpo/aggregate           → Aggregate into bulk lot (🔒 FPO)
GET    /api/fpo/bulk-lots           → My bulk lots (🔒 FPO)
```

### Market & Recommendation Module
```
GET    /api/market/prices           → Mandi prices by district
GET    /api/market/net-realization  → 3-scenario comparison
GET    /api/recommendations/:bulkId → Ranked sale recommendations (🔒)
```

### Buyer Module (🔒 BUYER role)
```
GET    /api/buyer/lots              → Browse open bulk lots
GET    /api/buyer/transactions      → My deal history
GET    /api/buyer/summary           → Purchase & reliability stats
```

### Real-Time Bidding
```
WS     /socket.io                   → Connect with JWT
  → join_lot_room { bulkLotId, userId }
  → place_bid { bulkLotId, buyerId, bidAmount }
  ← bid_updated (broadcast to room)
  ← deal_accepted (FPO closes deal)
```

### Logistics Module
```
POST   /api/logistics/assign        → Assign transporter (🔒 FPO/TRANSPORTER)
PATCH  /api/logistics/status        → Update delivery status (🔒 TRANSPORTER)
GET    /api/logistics/status/:id    → Check delivery status (🔒)
```

### Payment Module
```
POST   /api/payments/mock-pay       → Initiate mock payment (🔒 BUYER)
POST   /api/payments/hold-escrow    → Hold in escrow (🔒)
POST   /api/payments/release        → Release payment (🔒 FPO)
GET    /api/payments/status/:id     → Payment status (🔒)
```

### QR & Grievance
```
POST   /api/qr/generate/:bulkLotId  → Generate QR code (🔒 FPO)
GET    /api/qr/verify/:bulkLotId    → Verify lot via QR (🔒)
POST   /api/grievance/create        → File grievance (🔒)
GET    /api/grievance/:transactionId → View grievances (🔒)
```

> 🔒 = Requires `Authorization: Bearer <JWT>` header

---

## 🎬 Demo Flow (10 Steps)

1. **Farmer Login** — Ram logs in via OTP → sees dashboard with 20q Onion listed
2. **List Produce** — Ram adds Grade-A Nashik Red Onion, 20 quintals
3. **FPO Discovery** — FPO logs in, browses available lots in Nashik
4. **Aggregation** — FPO selects 10 lots (200q), sets reserve ₹1,800/q
5. **Price Comparison** — Net realization shows FPO bulk wins at ₹1,820/q
6. **Buyer Bids** — Buyer A joins bidding room, bids ₹1,920/q
7. **Competitive Bid** — Buyer B outbids at ₹1,950/q (live feed)
8. **Deal Closed** — FPO accepts, transaction created
9. **Payment** — Mock payment → escrow → released, farmer payouts calculated
10. **QR Verification** — Transporter scans QR at pickup, delivery tracked

---

## 🔐 Security Notes

- `.env` is **never committed** (in `.gitignore`)
- JWT tokens expire after 7 days
- Role-based middleware protects all sensitive endpoints
- OTP is auto-deleted after successful verification
- Payment uses Razorpay sandbox (no real money)

---

## 📊 Database Schema (Turso/SQLite)

| Table | Purpose |
|-------|---------|
| `users` | Farmers, FPOs, Buyers, Transporters |
| `farmer_lots` | Individual produce listings |
| `fpo_bulk_lots` | Aggregated bulk lots |
| `fpo_lot_mappings` | Links farmer lots to bulk lots |
| `transactions` | Deals with payment & delivery status |
| `otp_store` | Temporary OTP storage |
| `grievances` | Dispute tickets |

---

## 🤝 Team

Built for **Smart India Hackathon 2026**

| Role | Responsibility |
|------|---------------|
| Backend Lead | Architecture, Turso DB, Auth, FPO Aggregation |
| Backend Dev 2 | Market Intelligence, Net Realization Engine, Recommendations |
| Backend Dev 3 | Real-Time Bidding, Logistics, Payments, QR |
| Frontend Lead | React UI, Dashboards, PWA, Real-Time Bidding UI |

---

## 📄 License

This project is part of the Smart India Hackathon 2026 prototype.

---

<p align="center">
  <b>🌾 KrishiSetu — Bridging Farms to Markets, Transparently</b>
</p>
