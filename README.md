# AiTunes – AI-Powered Music Sharing & Generation Platform

**AiTunes** is a full-stack web platform that combines music streaming with AI-driven music creation. Users can upload their original tracks, explore and interact with other artists' music, and generate their own compositions using AI via MIDI.

Whether you're an aspiring musician, a listener, or someone curious about AI and creativity — AiTunes brings it all together.

---

## Features

- Upload and stream music
- Generate original music using AI (MIDI-based)
- Like and comment on tracks
- Follow artists and view profiles
- Create and manage playlists
- Secure authentication system
- Preview and convert MIDI to shareable formats

---

## Tech Stack

| Layer        | Tech/Tools                          |
|--------------|-------------------------------------|
| Frontend     | React / Next.js, Tailwind CSS       |
| Backend      | Node.js, Express.js, MongoDB (Mongoose) |
| AI Tools     | Magenta.js, Tone.js (for MIDI + playback) |
| Storage      | Cloudinary / Firebase (for audio files) |
| Auth         | JWT or Firebase Auth                |
| Deployment   | Vercel (frontend), Render / Railway (backend), MongoDB Atlas |

---

## Folder Structure

```bash
AiTunes/
├── client/       # React frontend
├── server/       # Node.js backend
├── ai-server/    # (Optional) Python AI backend
└── README.md
