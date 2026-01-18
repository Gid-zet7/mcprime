# MC PRIME - Filmmaking Portfolio Platform

A premium, cinematic website for a filmmaking company built with Next.js 16, TailwindCSS 4, MongoDB, and AWS S3.

## 🚀 Getting Started

### 1. Environment Setup

Create a `.env.local` file in the root directory with the following variables:

```bash
# Authentication (NextAuth.js)
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=generate_a_secure_random_string

# Database (MongoDB)
# Format: mongodb+srv://<user>:<password>@cluster.mongodb.net/mcprime
MONGODB_URI=your_mongodb_connection_string

# Storage (AWS S3)
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=us-east-1
AWS_S3_BUCKET_NAME=your_s3_bucket_name

# Optional: CloudFront Domain for serving assets (e.g., https://d123.cloudfront.net)
# If not set, direct S3 URLs will be used.
NEXT_PUBLIC_CLOUDFRONT_DOMAIN=
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the site.
Access [http://localhost:3000/dashboard](http://localhost:3000/dashboard) for the Admin Upload Interface (requires login).

To create the first admin user, you will need to manually insert a user into the `users` collection in MongoDB with:
- email
- passwordHash (plain text 'password' is supported in the current demo `lib/auth.ts`, ideally use bcrypt)
- role: 'admin'

## 🏗 Architecture

### Tech Stack
- **Frontend**: Next.js 16 (App Router), React 19, TailwindCSS 4, Framer Motion
- **Backend**: Next.js API Routes (Serverless Functions)
- **Database**: MongoDB (via Mongoose)
- **Storage**: AWS S3 (Client-side presigned uploads)
- **Auth**: NextAuth.js (Credentials Provider)

### Page Structure
- `/` - Landing Page (Hero, Showreel, Portfolio Grid, Services)
- `/contact` - Contact Form
- `/login` - Admin Login
- `/dashboard` - Protected Admin Route (Video Uploads)

### Database Schema

#### Videos Collection
- `title` (String)
- `description` (String)
- `category` (Enum: Commercials, Short Films, etc.)
- `thumbnailUrl` (String - S3 URL)
- `videoUrl` (String - S3 URL)
- `s3Key` (String - for deletion)
- `isPublished` (Boolean)
- `createdAt` (Date)

#### Users Collection
- `email` (String)
- `passwordHash` (String)
- `role` (String: 'admin' | 'user')

## 📦 Features
- **Cinematic Design**: Dark mode default, smooth animations, glassmorphism UI.
- **Secure Uploads**: Direct-to-S3 uploads using Presigned URLs to handle large video files efficiently.
- **Video Management**: Admin dashboard to upload, categorise, and publish videos.
- **Performance**: Lazy loading, optimized font usage (Geist/Inter).
