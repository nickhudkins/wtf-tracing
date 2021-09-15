# Broken Distributed Traces?

Ensure a datadog-agent is available at `localhost:8126`

Run `npm start` & Run `npm run remote`

Navigate in a browser (or curl it!) to: `http://localhost:3000/this`

This route makes a call (using `axios`) to `http://localhost:3001/that`

Navigate to the Datadog APM UI, and note that the traces are seemingly disconnected :(. Cry a little.
