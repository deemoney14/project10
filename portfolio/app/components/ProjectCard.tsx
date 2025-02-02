import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  link: string
}

export function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <div className="bg-white shadow rounded-lg p-6 transition-shadow hover:shadow-md">
      <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      <p className="mt-2 text-gray-600">{description}</p>
      <Link href={link} className="mt-4 inline-block text-blue-600 hover:text-blue-800 transition-colors">
        View Project →
      </Link>
    </div>
  )
}

