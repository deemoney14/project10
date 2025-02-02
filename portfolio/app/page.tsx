import { Header } from "./components/Header"
import { ProjectCard } from "./components/ProjectCard"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <Header
          name="Samuel Ackah"
          title="AWS Cloud Engineer"
          imageUrl="/image.png"
          githubUrl="https://github.com/yourusername"
          linkedinUrl="https://www.linkedin.com/in/yourusername"
          email="sackah08@gmail.com"
        />
        <div className="mt-12 space-y-8">
          <h2 className="text-2xl font-bold text-gray-900">About Me</h2>
          <p className="mt-2 text-gray-600">
            AWS Cloud Engineer with strong experience in IaC, CICD and Cloud Security. I specialize in building
            scalable, efficient, and cost effective cloud solutions.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard
              title="AWS Migration Project"
              description="Migrated from Console as Code to IaC with Terraform."
              link="https://github.com/yourusername/lambda-optimizer"
            />
            <ProjectCard
              title="Multi-Cloud Deployment Pipeline"
              description="Created a CI/CD pipeline that deploys applications across multiple cloud providers for high availability."
              link="https://github.com/yourusername/multi-cloud-pipeline"
            />
            <ProjectCard
              title="Kubernetes Cluster Autoscaler"
              description="Implemented an intelligent autoscaling solution for Kubernetes clusters based on custom metrics."
              link="https://github.com/yourusername/k8s-autoscaler"
            />
            <ProjectCard
              title="Serverless Data Processing"
              description="Developed a serverless architecture for real-time data processing using AWS Lambda and Kinesis."
              link="https://github.com/yourusername/serverless-data-processing"
            />
          </div>
        </div>
      </div>
    </main>
  )
}