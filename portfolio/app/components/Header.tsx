import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

interface HeaderProps {
  name: string
  title: string
  imageUrl: string
  githubUrl: string
  linkedinUrl: string
  email: string
}

export function Header({ name, title, imageUrl, githubUrl, linkedinUrl, email }: HeaderProps) {
  return (
    <div className="text-center">
      <div className="relative w-40 h-40 mx-auto mb-4">
        <Image src={imageUrl || "/placeholder.svg"} alt={name} fill className="rounded-full object-cover shadow-lg" />
      </div>
      <h1 className="mt-4 text-3xl font-bold text-gray-900">{name}</h1>
      <p className="mt-2 text-xl text-gray-600">{title}</p>
      <div className="mt-4 flex justify-center space-x-4">
        <Link href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">
          <Github size={24} />
        </Link>
        <Link
          href={linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-gray-900"
        >
          <Linkedin size={24} />
        </Link>
        <Link href={`mailto:${email}`} className="text-gray-600 hover:text-gray-900">
          <Mail size={24} />
        </Link>
      </div>
    </div>
  )
}

