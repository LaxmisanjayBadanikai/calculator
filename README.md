# 🧮 Calculator - Modern Web Calculator

<div align="center">

**A sleek, responsive calculator application with keyboard support and elegant design**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

</div>

## 📖 Overview

**Calculator** is a modern, fully-functional web-based calculator application built with vanilla HTML, CSS, and JavaScript. It features a clean, gradient-rich interface with smooth animations, keyboard support, and all standard arithmetic operations. The design is responsive and works seamlessly across all devices.

### 🌟 Key Features

| Feature | Description |
|---------|-------------|
| **➕ Basic Operations** | Addition, subtraction, multiplication, division |
| **⌨️ Keyboard Support** | Full keyboard control for faster input |
| **🎨 Modern Design** | Gradient backgrounds with smooth animations |
| **📱 Responsive** | Optimized for desktop, tablet, and mobile |
| **🧹 Error Handling** | Graceful error handling with clear messages |
| **📝 History Display** | Shows current input and results |
| **🔄 Continuous Calculations** | Chain multiple operations together |
| **🎯 Precision** | Handles decimal numbers with high precision |

---

## 🚀 Live Demo

[View Live Demo](https://your-calculator-url.com) *(Replace with your actual URL)*

---

## 🛠️ Technology Stack

### Frontend
- **HTML5**: Semantic markup structure
- **CSS3**: Custom styling with gradients and animations
- **JavaScript (ES6+)**: Application logic and event handling

### Features
- **CSS Animations**: Smooth slide-in and hover effects
- **Keyboard Events**: Full keyboard support for accessibility
- **Responsive Design**: Mobile-first approach with media queries

---

## 📂 Project Structure

```

calculator/
├── index.html              # Main HTML structure
├── style.css               # Complete styling with gradients
├── script.js               # Application logic & event handlers
├── LICENSE                 # MIT License
└── README.md               # Project documentation

```

---

## 🚦 Getting Started

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/calculator.git
cd calculator
```

1. **Open the application**

```
# Simply open index.html in your browser
open index.html
# Or double-click the file in your file explorer
```

1. **Start calculating!**

### Keyboard Shortcuts

| Key | Action |
|---|---|
| `0-9` | Number input |
| `+` | Addition |
| `-` | Subtraction |
| `*` | Multiplication |
| `/` | Division |
| `.` | Decimal point |
| `Enter` or `=` | Calculate result |
| `Backspace` | Delete last character |
| `Escape` or `C` | Clear all |

## 🎨 User Interface

### Visual Features

- **Gradient Background**: Beautiful purple-blue gradient
- **Glass-morphism Effect**: Semi-transparent calculator panel
- **Animated Elements**: Smooth slide-in animation on load
- **Interactive Buttons**: Hover and active states with shadows
- **Color-Coded Buttons**: Different colors for operations, numbers, and equals

### Button Categories

| Category | Color | Buttons |
|---|---|---|
| **Numbers** | Light gray | 0-9, decimal point |
| **Operators** | Purple-blue gradient | +, -, ×, ÷ |
| **Equals** | Pink-red gradient | = |
| **Clear** | Yellow-pink gradient | C |
| **Delete** | Light gray | ← |

## 🔧 Core Functionality

### Calculation Logic

```
// The calculator uses JavaScript's eval() function for calculations
// with proper error handling and input validation
function calculate() {
  try {
    // Remove trailing operators
    if (isOperator(currentInput[currentInput.length - 1])) {
      currentInput = currentInput.slice(0, -1);
    }
    let result = eval(currentInput);
    // Handle infinity and rounding
    if (!isFinite(result)) {
      currentInput = 'Error';
    } else {
      result = Math.round(result * 100000000) / 100000000;
      currentInput = result.toString();
    }
    shouldResetDisplay = true;
  } catch (error) {
    currentInput = 'Error';
    shouldResetDisplay = true;
  }
  updateDisplay();
}
```

### Key Features

1. **Input Validation**

- Prevents multiple decimal points
- Prevents consecutive operators
- Handles division by zero
1. **Display Management**

- Auto-resets display after calculation
- Shows error messages for invalid operations
- Handles long numbers with overflow
1. **Operator Chaining**

- Replace operator at end of expression
- Allows continuous calculations

## 📱 Responsive Design

| Device | Optimization |
|---|---|
| **Desktop** | Full-size calculator with comfortable button spacing |
| **Tablet** | Adjusted padding and font sizes |
| **Mobile** | Compact layout with touch-friendly buttons |
| **Small Mobile** | Reduced padding and font sizes for smaller screens |

### Breakpoints

```
@media (max-width: 480px) {
  .calculator { padding: 20px; }
  button { padding: 20px; font-size: 1.1em; }
  .display { font-size: 2em; padding: 15px; }
}
```

## 🔧 Customization Guide

### Changing Colors

```
/* In style.css - Modify gradient colors */
body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  /* Change to your preferred colors */
}

/* Modify button colors */
.operator {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  /* Customize operator button colors */
}
```

### Adding New Features

```
// In script.js - Add square root functionality
function appendToDisplay(value) {
  // Add square root handling
  if (value === '√') {
    // Implement square root logic
  }
  // Existing logic...
}

// Add a new button in index.html
<button onclick="appendToDisplay('√')">√</button>
```

## 🚢 Deployment

### Deploy to Vercel

```
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

1. Drag and drop the project folder to Netlify
1. Or connect your GitHub repository
1. Build command: (none needed - static site)
1. Publish directory: `.`

### Deploy to GitHub Pages

1. Push to GitHub
1. Enable GitHub Pages in repository settings
1. Select branch and folder
1. Access via `https://yourusername.github.io/calculator`

## 📊 Performance Optimizations

- ✅ Minimal DOM manipulation
- ✅ Efficient event handling
- ✅ No external dependencies
- ✅ Lightweight file size (< 5KB total)
- ✅ Fast loading time

## 🔐 Security Considerations

- **Input Validation**: Prevents injection attacks
- **Error Handling**: Graceful error recovery
- **No External APIs**: Runs completely client-side

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
1. **Create a feature branch** (`git checkout -b feature/improvement`)
1. **Make your changes**
1. **Commit your changes** (`git commit -m 'Add improvement'`)
1. **Push to the branch** (`git push origin feature/improvement`)
1. **Open a Pull Request**

### Development Guidelines

- Follow existing code style
- Use meaningful variable names
- Comment complex logic
- Test across multiple browsers
- Update documentation as needed

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](https://LICENSE) file for details.

## 🙏 Acknowledgements

- **Font**: Default system fonts optimized for readability
- **Design Inspiration**: Modern UI/UX design principles
- **Testing**: Tested across all major browsers

## 📬 Support

For issues, feature requests, or questions:

- **GitHub Issues**: [Submit an issue](https://github.com/yourusername/calculator/issues)
- **Email**: support@calculator-app.com

## 🎯 Future Enhancements

- Memory functions (MC, MR, M+, M-)
- History log of calculations
- Scientific functions (sin, cos, tan, log, etc.)
- Percentage calculation
- Keyboard shortcut hints
- Export calculation history
- Theming options (dark/light mode)
- Voice input support
<div align="center">
**Calculator - Simple, Fast, Beautiful** 🧮✨
</div>
