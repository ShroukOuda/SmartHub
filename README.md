# SmartHub 🛒

A modern e-commerce web application built with Angular 21, featuring a clean architecture and responsive design.

![Angular](https://img.shields.io/badge/Angular-21-red?logo=angular)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC?logo=tailwind-css)

## ✨ Features

- 🏠 **Home Page** - Hero banner, featured products, categories showcase, and brand highlights
- 📦 **Product Catalog** - Browse products with filtering, sorting, and search functionality
- 🔍 **Product Details** - Detailed product view with images, reviews, and related products
- 🛒 **Shopping Cart** - Add/remove items, update quantities, persistent cart storage
- 💳 **Checkout** - Multi-step checkout with shipping form, payment, and order review
- 👤 **User Authentication** - Login, registration, and profile management
- 🌙 **Theme Support** - Light/dark mode toggle
- 📱 **Responsive Design** - Mobile-first approach with Tailwind CSS
- 🔔 **Notifications** - Toast notifications for user feedback

## 🏗️ Project Structure

```
src/app/
├── core/                  # Core functionality
│   ├── guards/           # Route guards (auth, cart)
│   ├── models/           # Shared interfaces
│   └── services/         # Global services (auth, theme, notification)
├── features/             # Feature modules
│   ├── home/            # Landing page
│   ├── products/        # Product listing & details
│   ├── cart/            # Shopping cart
│   ├── checkout/        # Checkout flow
│   ├── user/            # User authentication
│   ├── contact/         # Contact page
│   ├── about/           # About page
│   └── static/          # Static pages (FAQ, Privacy, Terms, etc.)
├── layouts/              # Layout components
│   ├── header/          # Navigation header
│   └── footer/          # Site footer
└── shared/               # Shared resources
    ├── components/      # Reusable components
    ├── directives/      # Custom directives
    └── pipes/           # Custom pipes
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm 10+

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ShroukOuda/SmartHub.git
   cd SmartHub
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:4200`

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build for production |
| `npm run watch` | Build in watch mode |

## 🛠️ Tech Stack

- **Framework:** Angular 21 (Standalone Components)
- **State Management:** Angular Signals
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide Angular
- **Language:** TypeScript 5.9
- **Build Tool:** Angular CLI

## 🔑 Key Features Implementation

### Lazy Loading
All feature modules are lazy-loaded for optimal performance:
```typescript
{
  path: 'products',
  loadChildren: () => import('./features/products/routes').then(m => m.PRODUCTS_ROUTES)
}
```

### Reactive State with Signals
Modern state management using Angular Signals:
```typescript
private _items = signal<ICartItem[]>([]);
readonly items = this._items.asReadonly();
readonly itemCount = computed(() => this._items().reduce((s, i) => s + i.quantity, 0));
```

### Persistent Storage
Cart and authentication state persisted to localStorage for seamless user experience.

## 📁 Feature Modules

| Module | Description |
|--------|-------------|
| **Home** | Landing page with hero, featured products, categories |
| **Products** | Product listing, filtering, sorting, and detail pages |
| **Cart** | Shopping cart management with quantity controls |
| **Checkout** | Multi-step checkout (shipping → payment → review → confirmation) |
| **User** | Authentication (login/register) and profile management |
| **Contact** | Contact form |
| **Static** | FAQ, Shipping, Returns, Privacy Policy, Terms of Service |

## 🎨 Styling

The project uses Tailwind CSS 4 with a custom configuration for consistent theming:
- Responsive breakpoints
- Dark mode support
- Custom color palette

## 📄 License

This project is private and for educational purposes.

---

Built with ❤️ using Angular
