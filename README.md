<div align="center">
  <img src="./icon.png" width="320" alt="its-my-AI-tabs Neon Logo" />

  <h1>🎸 its-my-AI-tabs</h1>

  <h3>Your music. Your tabs. Your workflow.</h3>

  <p><strong>Made for musicians. Not for profit. Just for the love of music.</strong></p>
</div>

---

## 🎵 Why This Project Exists

I started this project with a simple belief:

**Music software should respect the musicians who use it.**

Too often, updates disrupt familiar workflows, valuable work gets lost, and useful features end up behind subscriptions.

I wanted something different.

**its-my-AI-tabs** is a free, open-source project built around stability, community feedback, and giving musicians control over their music.

No subscriptions. No paywalls. No unnecessary surprises.

Major changes will be tested in separate development releases before reaching the stable version.

**Keep playing. Keep learning. Enjoy the music!** 🎶

---

## 🚀 Features

### Current Features

- 🎸 Interactive guitar and bass tablature
- 🎼 Guitar Pro and MusicXML support
- ▶️ MIDI playback
- 🎵 Audio synchronization
- 📺 YouTube synchronization
- 🎬 Local MP4 video support (experimental)
- 🎨 Customizable tablature display
- 🌙 Dark and light notation themes

### Planned Features

- 🤖 AI-assisted music transcription using OpenMuik
- 🎸 Automatic guitar and bass note recognition
- 🎼 AI-generated editable tablature
- 🎧 Instrument separation
- 🔄 Improved synchronization and looping
- 💾 Better backup and recovery options
- 🧪 Separate development releases for major changes

---

## 🛠️ Development Status

**Early development — experimental prototype**

This project is currently under active development.

The existing tablature player is functional. MP4 video support is now being introduced and still requires testing and refinement.

OpenMuik AI transcription integration is planned for future development.

Features will be introduced gradually, tested carefully, and documented openly.

---

## ❤️ Project Philosophy

- **Your work belongs to you.** Data preservation and portability matter.
- **Stability first.** Working features should not be disrupted unnecessarily.
- **Community-driven.** Feedback, suggestions, and contributions are welcome.
- **Free means free.** No subscriptions or paid practice features.
- **Test before release.** Major changes should be evaluated in development builds first.

---

## 📦 Installation

### Requirements

- [Deno](https://deno.com/) 2.4.4 or above
- Git

### Development Setup

```bash
git clone https://github.com/Norbit2026Albert/its-my-AI-tabs.git
cd its-my-AI-tabs

# Install backend dependencies
deno install

# Install frontend dependencies
cd frontend
deno install
cd ..

# Start development server
deno task dev
