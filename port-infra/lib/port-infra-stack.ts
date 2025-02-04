import * as cdk from 'aws-cdk-lib';
import * as amplify from '@aws-cdk/aws-amplify-alpha';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as codebuild from 'aws-cdk-lib/aws-codebuild';
import { Construct } from 'constructs';

export class PortInfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Define IAM role
    const amplifyRole = iam.Role.fromRoleArn(this, 'AmplifyRole', 'arn:aws:iam::767398052924:role/AmplifySecretsManagerRole');

    // Use the secret from Secrets Manager
    const githubToken = cdk.SecretValue.secretsManager('samgit');  // Secure GitHub token

    // Amplify Application
    const amplifyApp = new amplify.App(this, 'PortfolioApplication', {
      appName: 'Portfolio',
      sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
        owner: 'deemoney14',
        repository: 'project10',
        oauthToken: githubToken,  // Secure token reference
      }),

      // Attach IAM role
      role: amplifyRole,

      // Build Specification
      buildSpec: codebuild.BuildSpec.fromObjectToYaml({
        version: '1.0',
        frontend: {
          phases: {
            preBuild: {
              commands: [
                'echo "Starting the build"',
                'cd portfolio',
                'npm install'
              ],
            },
            build: {
              commands: [
                'echo "Building project"',
                'npm run build-and-export',
                'echo "Build complete"'
              ],
            },
          },
          artifacts: {
            baseDirectory: 'portfolio/out',
            files: ['**/*'],
          },
          cache: {
            paths: ['node_modules/**/*', '.next/cache/**/*']
          }
        }
      })
    });

    // Add the main branch
    amplifyApp.addBranch('main', { autoBuild: true });
  }
}
