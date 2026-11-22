export function registerWebMCPTools() {
  if (
    typeof document === "undefined" ||
    !document.modelContext?.registerTool
  ) {
    return;
  }

  document.modelContext
    .registerTool({
      name: "get_clinic_information",

      description:
        "Provides public information about Sri Ashwini Physiotherapy Clinic in Danavaipeta, Rajahmundry, including services, location and contact information.",

      inputSchema: {
        type: "object",
        properties: {}
      },

      outputSchema: {
        type: "object",
        properties: {
          name: {
            type: "string"
          },
          location: {
            type: "string"
          },
          services: {
            type: "array",
            items: {
              type: "string"
            }
          },
          phone: {
            type: "string"
          },
          alternatePhone: {
            type: "string"
          },
          landline: {
            type: "string"
          },
          website: {
            type: "string"
          }
        },
        required: [
          "name",
          "location",
          "services",
          "phone",
          "website"
        ]
      },

      annotations: {
        readOnlyHint: true
      },

      execute: async () => {
        return {
          name: "Sri Ashwini Physiotherapy Clinic",

          location:
            "Danavaipeta, Rajahmundry, Andhra Pradesh, India",

          services: [
            "Electro Therapy",
            "Manual Therapy",
            "Cupping Therapy",
            "Exercise Therapy",
            "Dry Needling"
          ],

          phone: "+91 72859 92521",
          alternatePhone: "+91 77804 85780",
          landline: "0883-2443521",

          website:
            "https://sriashwiniphysiotherapyclinic.com/"
        };
      }
    })
    .catch(() => {
      // WebMCP is optional. The website should continue normally
      // if the browser does not support it or registration fails.
    });
}