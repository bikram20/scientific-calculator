# Scientific Calculator

A modern, feature-rich scientific calculator built with Next.js, React, TypeScript, and Tailwind CSS. This application provides both basic arithmetic operations and advanced scientific functions in a beautiful, responsive user interface.

## 🌟 Features

### Basic Operations
- **Arithmetic Operations**: Addition (+), Subtraction (-), Multiplication (×), Division (÷)
- **Decimal Support**: Full decimal number calculations
- **Clear Functions**: 
  - `C` - Clear all (resets calculator state)
  - `CE` - Clear entry (clears current display)
  - `DEL` - Delete last digit
- **Sign Change**: Toggle between positive and negative numbers (±)

### Scientific Functions
Toggle to scientific mode to access advanced mathematical functions:

#### Trigonometric Functions
- **sin** - Sine (input in degrees, converted to radians)
- **cos** - Cosine (input in degrees, converted to radians)
- **tan** - Tangent (input in degrees, converted to radians)
- **asin** - Arc sine (output in degrees)
- **acos** - Arc cosine (output in degrees)
- **atan** - Arc tangent (output in degrees)

#### Logarithmic Functions
- **log** - Base 10 logarithm
- **ln** - Natural logarithm (base e)

#### Power Functions
- **√** - Square root
- **x²** - Square (x to the power of 2)
- **x³** - Cube (x to the power of 3)
- **eˣ** - Exponential function (e to the power of x)
- **10ˣ** - 10 to the power of x
- **2ˣ** - 2 to the power of x

#### Special Functions
- **1/x** - Reciprocal (1 divided by x)
- **x!** - Factorial
- **π** - Pi constant (3.14159...)
- **e** - Euler's number constant (2.71828...)

### User Interface
- **Modern Design**: Beautiful gradient background with dark theme
- **Responsive Layout**: Works seamlessly on desktop and mobile devices
- **Mode Toggle**: Easy switch between basic and scientific calculator modes
- **Color-Coded Buttons**: 
  - Red/Orange: Clear and delete functions
  - Blue: Arithmetic operators
  - Purple: Trigonometric functions
  - Indigo: Logarithmic and exponential functions
  - Teal: Power and special functions
  - Pink: Mathematical constants
  - Green: Equals button
- **Smooth Animations**: Hover and click animations for better user experience
- **Large Display**: Easy-to-read calculation results

## 🚀 Getting Started

### Prerequisites
- Node.js 18.x or higher
- npm or yarn package manager

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/bikram20/scientific-calculator.git
   cd scientific-calculator
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the calculator.

### Production Build

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Start the production server**
   ```bash
   npm start
   ```

## 📖 Usage Guide

### Basic Calculator Mode
1. Click number buttons to input values
2. Click an operator (+, -, ×, ÷) to perform calculations
3. Click `=` to get the result
4. Use `C` to clear all, `CE` to clear the current entry, or `DEL` to delete the last digit

### Scientific Calculator Mode
1. Click the "Basic" button to toggle to "Scientific" mode
2. Enter a number
3. Click any scientific function button to apply it to the current value
4. The result will be displayed immediately
5. You can chain operations: apply a scientific function, then use basic operators

### Example Calculations
- **Basic**: `5 + 3 = 8`
- **Scientific**: Enter `30`, click `sin` → Result: `0.5` (sin of 30 degrees)
- **Scientific**: Enter `100`, click `log` → Result: `2` (log base 10 of 100)
- **Scientific**: Enter `16`, click `√` → Result: `4` (square root of 16)
- **Scientific**: Enter `5`, click `x!` → Result: `120` (5 factorial)

## 🏗️ Architecture

### Technology Stack
- **Framework**: Next.js 14 (App Router)
- **UI Library**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: DigitalOcean App Platform

### Project Structure
```
scientific-calculator/
├── app/
│   ├── layout.tsx      # Root layout component
│   ├── page.tsx        # Main page component
│   └── globals.css     # Global styles
├── components/
│   └── Calculator.tsx  # Main calculator component
├── app.yaml            # DigitalOcean App Platform configuration
├── package.json        # Dependencies and scripts
├── tsconfig.json       # TypeScript configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── README.md          # This file
```

### Key Components

#### Calculator Component
The main calculator component (`components/Calculator.tsx`) handles:
- State management for display, operations, and mode
- Number input and decimal handling
- Basic arithmetic operations
- Scientific function calculations
- UI rendering with mode toggle

## 🌐 Deployment

This application is deployed on **DigitalOcean App Platform** and automatically updates when changes are pushed to the `master` branch.

### Deployment Configuration
- **Platform**: DigitalOcean App Platform
- **Region**: New York (nyc)
- **Instance Size**: Basic XXS
- **Auto-deploy**: Enabled (deploys on push to master branch)
- **Health Check**: Configured for automatic monitoring

### App Information
- **App ID**: `fb704517-e5f5-410b-857e-a2229efcf61f`
- **GitHub Repository**: [bikram20/scientific-calculator](https://github.com/bikram20/scientific-calculator)

### Monitoring Deployment
To check deployment status:
```bash
doctl apps get fb704517-e5f5-410b-857e-a2229efcf61f -o json | jq -r '.[0].active_deployment.phase'
```

To view logs:
```bash
doctl apps logs fb704517-e5f5-410b-857e-a2229efcf61f web --type run --follow
```

## 🧪 Testing

The application has been tested locally and verified to work correctly with:
- ✅ Basic arithmetic operations
- ✅ Scientific functions
- ✅ Mode switching
- ✅ Error handling (division by zero, invalid inputs)
- ✅ Responsive design
- ✅ Production build

## 📝 License

This project is open source and available for use.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 👨‍💻 Development Notes

### Mathematical Functions
- Trigonometric functions accept input in degrees and convert to radians internally
- Inverse trigonometric functions return results in degrees
- Factorial function handles integer inputs only
- All calculations use JavaScript's built-in Math library for accuracy

### Future Enhancements
Potential improvements for future versions:
- History of calculations
- Memory functions (M+, M-, MR, MC)
- Keyboard support
- Additional mathematical constants
- Unit conversions
- Graphing capabilities

---

**Built with ❤️ using Next.js and React**
