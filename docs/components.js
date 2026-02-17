const components = {
  components: {
    schemas: {
      Task: {
        type: "object",
        properties: {

          title: {
            type: "string"
          },

          completed: {
            type: "boolean"
          }

        }
      }
    }
  }
}

module.exports = components
