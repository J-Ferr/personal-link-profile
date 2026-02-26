import React from "react"
import type { Profile } from "../data/profile"

interface ProfileCardProps {
  profile: Profile
}

export default function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <div className="text-center space-y-4">
      <img
        src={profile.avatar}
        alt={profile.name}
        className="mx-auto h-32 w-32 rounded-full border-3 border-blue-700 object-cover shadow-[0_0_50px_rgba(59,130,246,0.5)]"
      />
      <h1 className="text-slate-600 font-bold">{profile.name}</h1>
      <div className="mx-auto h-px w-65 bg-blue-500/70" />

      <p className="text-blue-500">{profile.title}</p>

      <p className="text-slate-800 text-sm">{profile.bio}</p>
      
    </div>
  )
}