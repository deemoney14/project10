import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  link: string
}

export function ProjectCard({ title, description, link }: ProjectCardProps) {
  return (
    <div className="bg-white shadow rounded-lg p-6 transition-shadow hover:shadow-md h-full flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
      </div>
      <Link href={link} className="mt-4 inline-block text-sm text-blue-600 hover:text-blue-800 transition-colors">
        View Project →
      </Link>
    </div>
  )
}

