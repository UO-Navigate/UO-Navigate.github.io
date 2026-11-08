const linkedInProfiles = {
    member1: "",
    member2: "",
    member3: "",
    member4: "",
    member5: ""
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
