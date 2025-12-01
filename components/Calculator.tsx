'use client'

import { useState } from 'react'

type ButtonType = 
  | 'number' 
  | 'operator' 
  | 'scientific' 
  | 'function' 
  | 'equals' 
  | 'clear' 
  | 'delete'

interface Button {
  label: string
  value: string
  type: ButtonType
  className?: string
}

export default function Calculator() {
  const [display, setDisplay] = useState('0')
  const [previousValue, setPreviousValue] = useState<number | null>(null)
  const [operation, setOperation] = useState<string | null>(null)
  const [waitingForOperand, setWaitingForOperand] = useState(false)
  const [scientificMode, setScientificMode] = useState(false)

  const inputNumber = (num: string) => {
    if (waitingForOperand) {
      setDisplay(num)
      setWaitingForOperand(false)
    } else {
      setDisplay(display === '0' ? num : display + num)
    }
  }

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.')
      setWaitingForOperand(false)
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.')
    }
  }

  const clear = () => {
    setDisplay('0')
    setPreviousValue(null)
    setOperation(null)
    setWaitingForOperand(false)
  }

  const performOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display)

    if (previousValue === null) {
      setPreviousValue(inputValue)
    } else if (operation) {
      const currentValue = previousValue || 0
      const newValue = calculate(currentValue, inputValue, operation)

      setDisplay(String(newValue))
      setPreviousValue(newValue)
    }

    setWaitingForOperand(true)
    setOperation(nextOperation)
  }

  const calculate = (firstValue: number, secondValue: number, operation: string): number => {
    switch (operation) {
      case '+':
        return firstValue + secondValue
      case '-':
        return firstValue - secondValue
      case '*':
        return firstValue * secondValue
      case '/':
        return firstValue / secondValue
      case '=':
        return secondValue
      default:
        return secondValue
    }
  }

  const performScientificOperation = (func: string) => {
    const value = parseFloat(display)
    let result: number

    switch (func) {
      case 'sin':
        result = Math.sin(value * (Math.PI / 180)) // Convert to radians
        break
      case 'cos':
        result = Math.cos(value * (Math.PI / 180))
        break
      case 'tan':
        result = Math.tan(value * (Math.PI / 180))
        break
      case 'asin':
        result = Math.asin(value) * (180 / Math.PI) // Convert to degrees
        break
      case 'acos':
        result = Math.acos(value) * (180 / Math.PI)
        break
      case 'atan':
        result = Math.atan(value) * (180 / Math.PI)
        break
      case 'log':
        result = Math.log10(value)
        break
      case 'ln':
        result = Math.log(value)
        break
      case 'sqrt':
        result = Math.sqrt(value)
        break
      case 'square':
        result = value * value
        break
      case 'cube':
        result = value * value * value
        break
      case 'exp':
        result = Math.exp(value)
        break
      case 'pow10':
        result = Math.pow(10, value)
        break
      case 'pow2':
        result = Math.pow(2, value)
        break
      case 'pi':
        result = Math.PI
        break
      case 'e':
        result = Math.E
        break
      case '1/x':
        result = 1 / value
        break
      case 'x!':
        result = factorial(value)
        break
      default:
        result = value
    }

    setDisplay(String(result))
    setWaitingForOperand(true)
  }

  const factorial = (n: number): number => {
    if (n < 0 || n !== Math.floor(n)) return NaN
    if (n === 0 || n === 1) return 1
    let result = 1
    for (let i = 2; i <= n; i++) {
      result *= i
    }
    return result
  }

  const deleteLast = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1))
    } else {
      setDisplay('0')
    }
  }

  const handleButtonClick = (button: Button) => {
    switch (button.type) {
      case 'number':
        inputNumber(button.value)
        break
      case 'operator':
        performOperation(button.value)
        break
      case 'scientific':
        performScientificOperation(button.value)
        break
      case 'function':
        if (button.value === '=') {
          performOperation('=')
        } else if (button.value === 'C') {
          clear()
        } else if (button.value === 'CE') {
          setDisplay('0')
        } else if (button.value === 'DEL') {
          deleteLast()
        } else if (button.value === '.') {
          inputDecimal()
        }
        break
      case 'equals':
        performOperation('=')
        break
      case 'clear':
        clear()
        break
      case 'delete':
        deleteLast()
        break
    }
  }

  const basicButtons: Button[] = [
    { label: 'C', value: 'C', type: 'function', className: 'bg-red-500 hover:bg-red-600' },
    { label: 'CE', value: 'CE', type: 'function', className: 'bg-red-400 hover:bg-red-500' },
    { label: 'DEL', value: 'DEL', type: 'function', className: 'bg-orange-500 hover:bg-orange-600' },
    { label: '÷', value: '/', type: 'operator', className: 'bg-blue-500 hover:bg-blue-600' },
    { label: '7', value: '7', type: 'number' },
    { label: '8', value: '8', type: 'number' },
    { label: '9', value: '9', type: 'number' },
    { label: '×', value: '*', type: 'operator', className: 'bg-blue-500 hover:bg-blue-600' },
    { label: '4', value: '4', type: 'number' },
    { label: '5', value: '5', type: 'number' },
    { label: '6', value: '6', type: 'number' },
    { label: '−', value: '-', type: 'operator', className: 'bg-blue-500 hover:bg-blue-600' },
    { label: '1', value: '1', type: 'number' },
    { label: '2', value: '2', type: 'number' },
    { label: '3', value: '3', type: 'number' },
    { label: '+', value: '+', type: 'operator', className: 'bg-blue-500 hover:bg-blue-600' },
    { label: '±', value: '±', type: 'function' },
    { label: '0', value: '0', type: 'number' },
    { label: '.', value: '.', type: 'function' },
    { label: '=', value: '=', type: 'equals', className: 'bg-green-500 hover:bg-green-600' },
  ]

  const scientificButtons: Button[] = [
    { label: 'sin', value: 'sin', type: 'scientific', className: 'bg-purple-500 hover:bg-purple-600' },
    { label: 'cos', value: 'cos', type: 'scientific', className: 'bg-purple-500 hover:bg-purple-600' },
    { label: 'tan', value: 'tan', type: 'scientific', className: 'bg-purple-500 hover:bg-purple-600' },
    { label: 'log', value: 'log', type: 'scientific', className: 'bg-indigo-500 hover:bg-indigo-600' },
    { label: 'asin', value: 'asin', type: 'scientific', className: 'bg-purple-400 hover:bg-purple-500' },
    { label: 'acos', value: 'acos', type: 'scientific', className: 'bg-purple-400 hover:bg-purple-500' },
    { label: 'atan', value: 'atan', type: 'scientific', className: 'bg-purple-400 hover:bg-purple-500' },
    { label: 'ln', value: 'ln', type: 'scientific', className: 'bg-indigo-400 hover:bg-indigo-500' },
    { label: '√', value: 'sqrt', type: 'scientific', className: 'bg-teal-500 hover:bg-teal-600' },
    { label: 'x²', value: 'square', type: 'scientific', className: 'bg-teal-500 hover:bg-teal-600' },
    { label: 'x³', value: 'cube', type: 'scientific', className: 'bg-teal-500 hover:bg-teal-600' },
    { label: 'eˣ', value: 'exp', type: 'scientific', className: 'bg-indigo-500 hover:bg-indigo-600' },
    { label: '10ˣ', value: 'pow10', type: 'scientific', className: 'bg-indigo-400 hover:bg-indigo-500' },
    { label: '2ˣ', value: 'pow2', type: 'scientific', className: 'bg-indigo-400 hover:bg-indigo-500' },
    { label: '1/x', value: '1/x', type: 'scientific', className: 'bg-teal-400 hover:bg-teal-500' },
    { label: 'x!', value: 'x!', type: 'scientific', className: 'bg-teal-400 hover:bg-teal-500' },
    { label: 'π', value: 'pi', type: 'scientific', className: 'bg-pink-500 hover:bg-pink-600' },
    { label: 'e', value: 'e', type: 'scientific', className: 'bg-pink-500 hover:bg-pink-600' },
  ]

  const handleSignChange = () => {
    if (display !== '0') {
      setDisplay(display.charAt(0) === '-' ? display.slice(1) : '-' + display)
    }
  }

  return (
    <div className="bg-gray-800 rounded-2xl shadow-2xl p-6 max-w-md w-full">
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-2xl font-bold text-white">Calculator</h1>
          <button
            onClick={() => setScientificMode(!scientificMode)}
            className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
              scientificMode
                ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                : 'bg-gray-600 hover:bg-gray-700 text-white'
            }`}
          >
            {scientificMode ? 'Scientific' : 'Basic'}
          </button>
        </div>
        <div className="bg-gray-900 rounded-lg p-4 mb-4">
          <div className="text-right text-3xl font-mono text-white overflow-x-auto">
            {display}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {scientificMode && scientificButtons.map((button, index) => (
          <button
            key={index}
            onClick={() => handleButtonClick(button)}
            className={`p-4 rounded-lg font-semibold text-white transition-all transform hover:scale-105 active:scale-95 ${
              button.className || 'bg-gray-600 hover:bg-gray-700'
            }`}
          >
            {button.label}
          </button>
        ))}
        
        {basicButtons.map((button, index) => (
          <button
            key={index}
            onClick={() => {
              if (button.value === '±') {
                handleSignChange()
              } else {
                handleButtonClick(button)
              }
            }}
            className={`p-4 rounded-lg font-semibold text-white transition-all transform hover:scale-105 active:scale-95 ${
              button.className || 'bg-gray-600 hover:bg-gray-700'
            }`}
          >
            {button.label}
          </button>
        ))}
      </div>
    </div>
  )
}

