export const FormConstants={
    EXPLORE_BUTTON:'EXPLORE',
    HEADER_TAG_NAMES:['Hotels','Bike Rentals','Restaurants'],
    FORM_NAME_INPUT_TYPE:'text',
    FORM_CONTACT_INPUT_TYPE:'number',
    BUTTON_NAME:'SUBMIT INTEREST',
    TITLE: "Contact Us",
    DESCRIPTION: 'Our Sales Team will reach out to you ASAP!',
    LABELS: {
        NAME: "Name",
        HOME_TOWN: "Your Home Town",
        DESTINATION: "Where would you like to go?",
        CONTACT_NUMBER: "Contact Number"
    },
     formResultCard:(name='',homeTown='',destination='')=>{
       return `Thank You ${name} for expressing your interest in travelling with us .Our Sales team will get back with the best packages from ${homeTown} to ${destination}.`
    }
};

export const IndexPageConstants={
    HEADER_TITLE:'WELCOME TO EXPLORER',
    HEADER_DESCRIPTION:'Your Adventure Travel Expert in the',
    HEADER_DESCRIPTION_SPAN:'SOUTH',
    CONTAINER_TITLE:'Destinations',
    CONTAINER_DESCRIPTION:'Just for you. Because you and your bike are special to us!'

};

export const CardConstants={
   BUTTON_NAME:'READ MORE',
   IMAGE_ALTER_TAG:'enchanting tamilnadu'

};

