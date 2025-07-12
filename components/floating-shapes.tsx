"use client"

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>
      {/* Círculos flotantes */}
      <div
        className="absolute top-20 left-10 w-20 h-20 bg-blue-400/20 rounded-full animate-bounce"
        style={{ animationDelay: "0s", animationDuration: "3s" }}
      />
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-cyan-400/20 rounded-full animate-bounce"
        style={{ animationDelay: "1s", animationDuration: "4s" }}
      />
      <div
        className="absolute bottom-40 left-20 w-12 h-12 bg-purple-400/20 rounded-full animate-bounce"
        style={{ animationDelay: "2s", animationDuration: "5s" }}
      />

      {/* Formas geométricas */}
      <div
        className="absolute top-60 right-40 w-8 h-8 bg-blue-400/20 rotate-45 animate-spin"
        style={{ animationDuration: "8s" }}
      />
      <div
        className="absolute bottom-60 right-10 w-6 h-6 bg-emerald-400/20 rotate-45 animate-spin"
        style={{ animationDuration: "6s", animationDirection: "reverse" }}
      />

      {/* Líneas decorativas */}
      <div className="absolute top-32 left-1/3 w-32 h-0.5 bg-gradient-to-r from-blue-400/30 to-transparent animate-pulse" />
      <div
        className="absolute bottom-32 right-1/3 w-24 h-0.5 bg-gradient-to-l from-cyan-400/30 to-transparent animate-pulse"
        style={{ animationDelay: "1s" }}
      />
    </div>
  )
}
