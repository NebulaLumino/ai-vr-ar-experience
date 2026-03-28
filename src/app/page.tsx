"use client";

import { useState } from "react";
import { generateText } from "ai";
import { deepseek } from "@ai-sdk/deepseek";

export default function VRARExperiencePage() {
  const [formData, setFormData] = useState({
    experienceType: "",
    theme: "",
    targetAudience: "",
    duration: "",
    immersionLevel: "",
    interactionStyle: "",
    additionalNotes: "",
  });
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setOutput("");

    try {
      const { text } = await generateText({
        model: deepseek("deepseek-chat"),
        prompt: `You are an expert VR/AR experience designer. Create a comprehensive VR/AR experience description based on the following specifications:

- Experience Type: ${formData.experienceType}
- Theme: ${formData.theme}
- Target Audience: ${formData.targetAudience}
- Duration: ${formData.duration}
- Immersion Level: ${formData.immersionLevel}
- Interaction Style: ${formData.interactionStyle}
- Additional Notes: ${formData.additionalNotes}

Provide a detailed experience description including:
1. Experience Overview & Concept
2. Narrative & Story Flow
3. Environment & Atmosphere Design
4. Key Interactions & Mechanics
5. Visual & Audio Cues
6. User Journey & Pacing
7. Technical Requirements
8. Accessibility Considerations
9. Potential Emotional Impact

Format with clear markdown headers and bullet points.`,
      });
      setOutput(text);
    } catch (err) {
      setOutput("Error generating experience description. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white p-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent mb-3">
            VR/AR Experience Generator
          </h1>
          <p className="text-slate-400 text-lg">
            Design immersive virtual and augmented reality experiences with AI
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-5 text-cyan-300">Experience Parameters</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-slate-300 mb-1">Experience Type</label>
                <select
                  name="experienceType"
                  value={formData.experienceType}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-800/60 border border-slate-600 rounded-lg px-3 py-2 text-white focus:border-cyan-400 focus:outline-none"
                >
                  <option value="">Select type...</option>
                  <option value="VR Fully Immersive">VR Fully Immersive</option>
                  <option value="AR Overlay">AR Overlay</option>
                  <option value="Mixed Reality">Mixed Reality</option>
                  <option value="360 Video Experience">360 Video Experience</option>
                  <option value="Location-Based AR">Location-Based AR</option>
                  <option value="Social VR">Social VR</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-1">Theme / Concept</label>
                <input
                  type="text"
                  name="theme"
                  value={formData.theme}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Underwater coral reef exploration"
                  className="w-full bg-slate-800/60 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-1">Target Audience</label>
                <input
                  type="text"
                  name="targetAudience"
                  value={formData.targetAudience}
                  onChange={handleChange}
                  required
                  placeholder="e.g., Children ages 8-12, families"
                  className="w-full bg-slate-800/60 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-1">Duration</label>
                <select
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-800/60 border border-slate-600 rounded-lg px-3 py-2 text-white focus:border-cyan-400 focus:outline-none"
                >
                  <option value="">Select duration...</option>
                  <option value="2-5 minutes">2-5 minutes (Quick Experience)</option>
                  <option value="10-15 minutes">10-15 minutes (Short Session)</option>
                  <option value="20-30 minutes">20-30 minutes (Standard)</option>
                  <option value="45-60 minutes">45-60 minutes (Extended)</option>
                  <option value="Multi-session">Multi-session / Episodic</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-1">Immersion Level</label>
                <select
                  name="immersionLevel"
                  value={formData.immersionLevel}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-800/60 border border-slate-600 rounded-lg px-3 py-2 text-white focus:border-cyan-400 focus:outline-none"
                >
                  <option value="">Select level...</option>
                  <option value="Low (Gazing)">Low — Gazing / Observation</option>
                  <option value="Medium (Exploring)">Medium — Exploring / Navigation</option>
                  <option value="High (Full Body)">High — Full Body Interaction</option>
                  <option value="Ultra (Total Sensory)">Ultra — Total Sensory Immersion</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-1">Interaction Style</label>
                <select
                  name="interactionStyle"
                  value={formData.interactionStyle}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-800/60 border border-slate-600 rounded-lg px-3 py-2 text-white focus:border-cyan-400 focus:outline-none"
                >
                  <option value="">Select style...</option>
                  <option value="Hands-free / Gaze">Hands-free / Gaze Controlled</option>
                  <option value="Controller-based">Controller-based</option>
                  <option value="Hand Tracking">Hand Tracking</option>
                  <option value="Voice Commands">Voice Commands</option>
                  <option value="Physical Props">Physical Props / Haptic</option>
                  <option value="Multi-modal">Multi-modal (Combined)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-slate-300 mb-1">Additional Notes</label>
                <textarea
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Special requirements, constraints, or creative directions..."
                  className="w-full bg-slate-800/60 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-fuchsia-500 rounded-lg font-semibold text-white hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {loading ? "Generating..." : "Generate Experience"}
              </button>
            </form>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-5 text-fuchsia-300">Generated Experience</h2>
            <div className="bg-slate-900/70 rounded-xl p-4 min-h-[500px] max-h-[600px] overflow-y-auto">
              {output ? (
                <div className="prose prose-invert prose-sm max-w-none whitespace-pre-wrap">
                  {output.split("\n").map((line, i) => {
                    if (line.startsWith("# "))
                      return <h1 key={i} className="text-xl font-bold text-cyan-300 mt-4 mb-2">{line.slice(2)}</h1>;
                    if (line.startsWith("## "))
                      return <h2 key={i} className="text-lg font-semibold text-fuchsia-300 mt-3 mb-2">{line.slice(3)}</h2>;
                    if (line.startsWith("### "))
                      return <h3 key={i} className="text-md font-semibold text-white mt-2 mb-1">{line.slice(4)}</h3>;
                    if (line.startsWith("- "))
                      return <li key={i} className="text-slate-300 ml-4">{line.slice(2)}</li>;
                    if (line.trim() === "") return <br key={i} />;
                    return <p key={i} className="text-slate-300">{line}</p>;
                  })}
                </div>
              ) : (
                <p className="text-slate-500 italic">
                  Your VR/AR experience description will appear here...
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
