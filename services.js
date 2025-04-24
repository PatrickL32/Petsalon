console.log("services");

// Define services and their pricing/packages
const services = [
    {
        name: "Grooming",
        packages: [
            { name: "Full Package", price: "$50" },
            { name: "Bath and Brush", price: "$35" },
            { name: "Nail Trim", price: "$10" }
        ]
    },
    {
        name: "Training",
        packages: [
            { name: "Puppy Training Package", price: "$300" },
            { name: "Basic Training", price: "$200" },
            { name: "Advanced Training", price: "$250" }
        ]
    },
    {
        name: "Care",
        packages: [
            { name: "Day Care", price: "$25" },
            { name: "Overnight Care", price: "$50" },
            { name: "Boarding", price: "$75" }
        ]
    }
];

// Populate the dropdown menu using jQuery
$(document).ready(function () {
    const $dropdown = $("#services-dropdown");
    services.forEach((service, index) => {
        $dropdown.append(`<option value="${index}">${service.name}</option>`);
    });

    // Handle dropdown selection
    $dropdown.on("change", function () {
        const selectedIndex = $(this).val();
        const selectedService = services[selectedIndex];

        // Display the selected service details
        const $detailsContainer = $("#service-details");
        $detailsContainer.html(`
            <h4>${selectedService.name}</h4>
            <ul>
                ${selectedService.packages
                    .map(
                        (pkg) =>
                            `<li><strong>${pkg.name}</strong>: ${pkg.price}</li>`
                    )
                    .join("")}
            </ul>
        `);
        $detailsContainer.show(); // Make the details visible
    });
});