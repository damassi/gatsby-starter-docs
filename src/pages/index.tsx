import React from "react"

import Layout from "../Layout"
import { Image, Box } from "rebass"

export default function IndexPage() {
  return (
    <Layout>
      <Image
        src="https://raw.githubusercontent.com/artsy/hokusai/master/hokusai.jpg"
        height={300}
        py={3}
      />

      <Box mb={1}>
        <h1>Hokusai</h1>
        <h1 />
      </Box>

      <p>Hokusai is a Docker + Kubernetes CLI for application developers.</p>

      <p>
        Hokusai "dockerizes" applications and manages their lifecycle throughout
        development, testing, and release cycles.
      </p>

      <p>
        Hokusai wraps calls to kubectl, docker, docker-compose and git with a
        CLI, and defines a CI workflow.
      </p>

      <p>
        Hokusai currently only supports Kubernetes deployments on AWS,
        configured to pull from ECS container repositories (ECR), although other
        providers may be added in the future.
      </p>
    </Layout>
  )
}
