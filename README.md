# 🎭 react-input-masker

A lightweight and modern library to apply **input masks** in **React** applications. Perfect for handling formats like CPF, CNPJ, phone numbers, ZIP codes, dates, and more — with ease and flexibility.

## ✨ Purpose

The goal of this library is to provide a simple and efficient way to apply masks to input fields in React, supporting various formats and working seamlessly with controlled components.

**Key features:**

- ✅ Easy to use
- ⚛️ Fully compatible with React 17+ and 18+
- 🧩 Supports custom mask definitions
- 📦 Lightweight and dependency-free

## 📦 Installation

Using **npm**:

```bash
npm install react-input-masker
```

Or with yarn:

```bash
yarn add react-input-masker
```

## 🚀 Basic Usage

Here’s a quick example of how to use the component:

```tsx
import React from "react";
import { InputMask } from "react-input-masker";

const App = () => {
  return (
    <div>
      <label>Phone Number:</label>
      <InputMask mask="(99) 99999-9999" placeholder="(00) 00000-0000" />
    </div>
  );
};

export default App;
```
