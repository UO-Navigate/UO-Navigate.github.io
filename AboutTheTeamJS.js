const linkedInProfiles = {
    member1: "https://www.linkedin.com/in/hadeed-ali-52627344b/",
    member2: "https://www.linkedin.com/in/taha-amoum/",
    member3: "https://www.linkedin.com/in/iman-baratov/",
    member4: "https://www.linkedin.com/in/haytam-besri-828128443/",
    member5: "https://www.linkedin.com/in/areej-chkir-3b837b3a8/"
};

const teamImages = document.querySelectorAll(".team-image");

teamImages.forEach(function (image) {

    image.addEventListener("click", function (event) {
        const member = image.dataset.member;
        const profileURL = linkedInProfiles[member];

        //basically doesnt do anything until we add our pictures
        if (!profileURL) {
            event.preventDefault();
            alert("The LinkedIn profile has not been added yet.");
            return;
        }

        image.href = profileURL;
        image.target = "_blank";
        image.rel = "noopener noreferrer";
    });

});
