provider "aws" {
  region = "us-west-1"
}

# variables.tf

variable "github_token" {
  description = "GitHub token for authentication"
  type        = string
}
