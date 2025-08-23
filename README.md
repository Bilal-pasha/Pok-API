# PokéAPI Explorer 🚀

A modern, responsive Pokémon search application built with Next.js 15, TypeScript, and Tailwind CSS. This project demonstrates a clean architecture with a comprehensive design system using shadcn/ui components.

## 🌟 Features

- **Modern UI/UX**: Clean, responsive design with dark/light mode support
- **Pokemon Search**: Real-time search functionality using the PokéAPI
- **Component-Based Architecture**: Atomic design principles with reusable components
- **Type Safety**: Full TypeScript implementation
- **Performance Optimized**: Built with Next.js 15 and React 19
- **Accessibility**: WCAG compliant components with proper ARIA attributes

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.0
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4 with CSS Variables
- **UI Components**: shadcn/ui (Radix UI primitives)
- **State Management**: TanStack Query (React Query)
- **HTTP Client**: Axios
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd PokéAPI
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # API Configuration
   NEXT_PUBLIC_API_BASE_URL=https://pokeapi.co/api
   
   # Optional: Add other environment variables as needed
   # NEXT_PUBLIC_APP_URL=http://localhost:3000
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 📁 Project Structure

```
PokéAPI/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (public)/          # Public routes group
│   │   │   ├── globals.css    # Global styles & CSS variables
│   │   │   ├── layout.tsx     # Root layout
│   │   │   └── page.tsx       # Home page
│   │   └── favicon.ico
│   ├── components/            # Component library (Atomic Design)
│   │   ├── atoms/            # Basic building blocks
│   │   ├── molecules/        # Simple component combinations
│   │   ├── organisms/        # Complex UI sections
│   │   ├── pages/           # Page-level components
│   │   └── templates/       # Layout templates
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utility libraries
│   ├── providers/           # Context providers
│   ├── services/            # API services
│   ├── types/               # TypeScript type definitions
│   └── utils/               # Utility functions
├── public/                  # Static assets
├── components.json          # shadcn/ui configuration
└── package.json
```

## 🎨 Design System

Our design system follows **Atomic Design** principles with a comprehensive component library built on shadcn/ui.

### Component Architecture

#### 🔹 Atoms (Basic Building Blocks)
- **Button**: Multi-variant button component with size and style options
- **Input**: Form input with validation states
- **NextImage**: Optimized image component with skeleton loading
- **SearchInput**: Specialized search input field
- **SearchButton**: Search action button
- **Separator**: Visual divider component
- **ShimmerBox**: Loading skeleton component

#### 🔹 Molecules (Simple Combinations)
- **Card**: Flexible card container with header, content, and footer
- **SearchBar**: Combined search input and button
- **ShimmerGrid**: Grid of loading skeletons

#### 🔹 Organisms (Complex Sections)
- **Navbar**: Main navigation component
- **Footer**: Site footer
- **PokemonCard**: Pokemon display card with image and details
- **NavigationMenu**: Advanced navigation menu

#### 🔹 Pages (Page-Level Components)
- **PokemonSearchPage**: Complete search interface

#### 🔹 Templates (Layout Structures)
- **MainLayout**: Main application layout with navbar and footer

### Design Tokens

#### Colors
Our color system uses CSS custom properties with OKLCH color space for better perceptual uniformity:

```css
/* Light Mode */
--background: oklch(1 0 0);
--foreground: oklch(0.145 0 0);
--primary: oklch(0.205 0 0);
--secondary: oklch(0.97 0 0);
--accent: oklch(0.97 0 0);
--destructive: oklch(0.577 0.245 27.325);

/* Dark Mode */
--background: oklch(0.145 0 0);
--foreground: oklch(0.985 0 0);
--primary: oklch(0.922 0 0);
/* ... additional dark mode colors */
```

#### Typography
- **Primary Font**: Geist Sans (Variable)
- **Monospace Font**: Geist Mono (Variable)

#### Border Radius
- **Small**: `calc(var(--radius) - 4px)`
- **Medium**: `calc(var(--radius) - 2px)`
- **Large**: `var(--radius)` (0.625rem)
- **Extra Large**: `calc(var(--radius) + 4px)`

### Component Variants

#### Button Variants
```typescript
// Variants
'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'

// Sizes  
'default' | 'sm' | 'lg' | 'icon'

// Usage
<Button variant="default" size="lg">Click me</Button>
```

#### Card Structure
```typescript
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    {/* Content */}
  </CardContent>
  <CardFooter>
    <CardAction>Action</CardAction>
  </CardFooter>
</Card>
```

## 🔧 Configuration Files

### Environment Variables

Create a `.env.local` file with the following variables:

```env
# Required
NEXT_PUBLIC_API_BASE_URL=https://pokeapi.co/api

# Optional
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=PokéAPI Explorer
```

### shadcn/ui Configuration (`components.json`)

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "",
    "css": "src/app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true,
    "prefix": ""
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  },
  "iconLibrary": "lucide"
}
```

## 📚 API Integration

The application integrates with the [PokéAPI](https://pokeapi.co/) to fetch Pokemon data.

### Service Layer
```typescript
// src/services/pokemonService.ts
export async function fetchPokemon(name: string): Promise<Pokemon> {
  const { data } = await http.get(API_ENDPOINTS.POKEMON + name.toLowerCase());
  return data;
}
```

### Type Definitions
```typescript
interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  base_experience: number;
  abilities: PokemonAbility[];
  types: PokemonType[];
  sprites: PokemonSprite;
  moves: PokemonMove[];
}
```

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## 🎯 Usage Examples

### Adding New Components

1. **Create the component** in the appropriate atomic level directory
2. **Export it** from the index file
3. **Use consistent styling** with our design tokens
4. **Add TypeScript types** for props

```typescript
// Example: src/components/atoms/NewComponent.tsx
import { cn } from "@/lib/utils"

interface NewComponentProps {
  variant?: 'default' | 'secondary';
  children: React.ReactNode;
}

export function NewComponent({ 
  variant = 'default', 
  children,
  className,
  ...props 
}: NewComponentProps & React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "base-styles",
        variant === 'secondary' && "secondary-styles",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
```

### Using the Search Functionality

```typescript
import { usePokemon } from "@/hooks/usePokemon";

function MyComponent() {
  const { data: pokemon, isLoading, error } = usePokemon("pikachu");
  
  if (isLoading) return <ShimmerBox />;
  if (error) return <div>Error loading Pokemon</div>;
  
  return <PokemonCard pokemon={pokemon} />;
}
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on push

### Other Platforms
The application can be deployed on any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- Docker

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [PokéAPI](https://pokeapi.co/) for the comprehensive Pokemon data
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Next.js](https://nextjs.org/) team for the amazing React framework

---

**Happy coding! 🎉**
