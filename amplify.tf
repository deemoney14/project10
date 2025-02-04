resource "aws_amplify_app" "example" {
  name       = "example-amplify-app"
  repository = "https://github.com/deemoney14/project10"  # Replace with your repo URL
  oauth_token = var.github_token  # GitHub token for authentication (or use other authentication)

 build_spec = file("portfolio/amplify-build-spec.yml") # Path to build spec if any (optional)
  
  environment_variables = {
    MY_ENV_VAR = "value"  # Add any required environment variables
  }

  # Enable automatic branch creation
  auto_branch_creation_config {
    enable_auto_build = true  # Enable auto-build
  }
}

resource "aws_amplify_branch" "example_branch" {
  app_id = aws_amplify_app.example.id
  branch_name = "main"

  environment_variables = {
    MY_ENV_VAR = "value"
  }

  stage = "PRODUCTION"
}
