# 🛠️ ToolsAtZero

<div align="center">
  <p><strong>The 100% Client-Side, Zero-Server AI & Utility Suite.</strong></p>
  <img src="https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/WebGPU-Powered-blueviolet?style=for-the-badge" alt="WebGPU" />
  <img src="https://img.shields.io/badge/Privacy-100%25_Local-success?style=for-the-badge" alt="Privacy: 100% Local" />
</div>

<br />

**ToolsAtZero** is a massive collection of **102 web-based utilities and AI tools** designed with absolute privacy in mind. Everything from PDF splitting to complex AI Grammar Checking and Image Background Removal runs **entirely inside your browser** using WebAssembly and WebGPU. 

No backend servers. No API keys. No database. Your files and data never leave your device.

🌐 **Live Demo:** [https://www.toolsatzero.com](https://www.toolsatzero.com)

---

## 🚀 Why ToolsAtZero?

Modern AI tools rely heavily on sending your personal data, API keys, and private documents to third-party servers. We engineered a different approach:
* **Absolute Privacy:** 100% of processing happens locally in the browser sandbox. 
* **Zero Latency:** After the initial one-time model cache, tools execute instantly without network lag.
* **Offline Capable:** Powered by browser IndexedDB caching, the tools can be used completely offline.
* **Free Forever:** Because we don't pay for GPU server time or OpenAI API credits, the platform costs nothing to run and nothing to use.

---

## 🧠 The "Project Antigravity" Architecture

We push the limits of modern web browsers by downloading and executing quantized neural networks directly into local memory.

1. **Hardware Acceleration:** Uses `device: 'webgpu'` for blazingly fast inference via the user's graphics card.
2. **Multi-Worker Isolation:** Heavy tasks are offloaded to dedicated Web Workers (`text-worker.js`, `vision-worker.js`, `audio-worker.js`) to keep the React UI completely fluid and unblocked.
3. **Quantized Models:** Utilizes heavily compressed 4-bit (`q4`) models (like `Qwen2.5-0.5B-Instruct` and `whisper-tiny.en`) via Transformers.js to shrink download sizes from gigabytes to megabytes.
4. **Few-Shot Safety Protocol:** Small language models are strictly guided via zero-creativity parameters (`temperature: 0.0`) and few-shot templates to guarantee deterministic tool outputs (No chatbot drift!).

---

## 🧰 The Tool Suite (102 Tools Total)

### ✍️ AI Writing & Text Tools
*AI Grammar Checker, AI Tone Rewriter, AI Emoji Suggestion, AI Sentence Simplifier, AI Title Generator, and more.*

### 🖼️ AI Image & Vision Tools
*AI Background Remover, AI Image Denoiser, AI Auto Crop, AI Image Caption Generator, AI OCR (Image to Text).*

### 📄 Document & PDF Tools
*AI PDF Summarizer, Add/Remove Pages, Merge/Split PDF, Protect/Unlock PDF, AI Invoice Reader.*

### 👨‍💻 Developer & Data Tools
*AI Regex Explainer, AI JSON Error Explainer, Base64 Encoder/Decoder, CSS/JS Minifiers, Epoch Converter.*

### 🎙️ AI Audio & Productivity Tools
*Local Speech-to-Text (Whisper), AI Resume Analyzer, Password Strength Analyzer, Time/Date Calculators.*

---

## 💻 Local Development

Want to run the entire 102-tool suite on your local machine?

### Prerequisites
* Node.js 18+
* npm or pnpm

### Getting Started

1. **Clone the repository:**
```bash
   git clone [https://github.com/yourusername/toolsatzero.com.git](https://github.com/yourusername/toolsatzero.com.git)
   cd toolsatzero.com