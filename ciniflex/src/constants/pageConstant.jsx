export const TRAILERS = {
    TITLE: 'Trailers',
    MESSAGE: 'You need to sign in to view Trailers.',
    SIGN_IN: 'Sign In Now',
    IMAGE: 'Trailer',
    MOVIE_TITLE: 'Sintel',
    MOVIE_DESCRIPTION: 'Sintel tells the story of a friendship between a girl named Sintel, a baby dragon and the desperate lengths she will go to when that friendship is taken from her. Sintel is created by Blender in 2010 as a pet project to demonstrate Blender capabilities.'
};

export const Languages = {
    title: 'View In Other Languages',
    otherLanguages: ['E', 'ह', 'த', 'മ', 'తె']
};
export const NOW_SHOWING = {
    TITLE: `Now Showing`,
    URL: "https://www.youtube.com/embed/HOfdboHvshg",
};

export const LOGIN_PAGE = {
    TITLE: `Login`,
    DESCRIPTION: `Logging into CineFLEX will give you access to full videos and movies. You can sit back relax and watch at your home.`,
    EMAIL: `Email`,
    PASSWORD: `Password`,
    ERROR_MESSAGE: `Email or password did not match. Please try again!`
};

export const ERROR_IMAGE=`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRvURrxVdCQ-qh_VmG80K7iMWpsKzuUOrVBA&usqp=CAU`;

export const LOGIN_CARD_CONSTANTS={
    EMAIL_LABEL: 'Email',
    EMAIL_INPUT_TYPE: 'email',
    PASSWORD_LABEL: 'Password',
    PASSWORD_INPUT_TYPE: 'text',
}
export const LOTTERY_CONSTANTS={
    NUMBER_REGEX:/^[0-9]{10}/,
    VALID_NUMBER:'Please Enter a valid Number',
    LUCKY:'lucky',
    UNLUCKY:'Sorry :( Better Luck Next Time',
    LUCKY_MESSAGE:'Hurray ! You won a free ticket to Blind Date on Wednesday',
    LOTTERY_TITLE:'Your Mobile Number can win you exciting prizes',  
    LOTTERY_INPUT_TYPE:'tel',
    LOTTERY_INPUT_PLACEHOLDER:'Enter Mobile Number'
}


export const BUTTON_CONSTANTS={
    LOGIN_BUTTON:'LOGIN',
    LOTTERY_BUTTON:`I'm Feeling Lucky`,
    LOAD_MORE:'LOAD MORE',
    LOGOUT:'LogOut',
    LOGIN:'LOGIN',
    WATCH_NOW:'WATCH NOW',
    SIGN_IN_NOW:'Sign In Now'
}

export const NAVIGATION_CONSTANTS={
    HOME_PAGE:'/',
    LOGIN_PAGE:'/login',
    NOW_SHOWING:'/show-time',
    ALL_MOVIE:"/show-movies"
}

export const MOVIE_CONTAINER_CONTSTANTS={
     ALLMOVIES_TITLE:'All Movies',
     LIKE:'Likes',
     ACTORS:'ACTORS',
     ADS:'ad'
}

export const DETAILS_AD_SETTINGS = {
    TIME_BEFORE_AD: 15,
    TIME_AFTER_AD: 5,
    ADVERTISEMENT_MESSAGE: `Advertisement in `,
    CONTENT_MESSAGE: `Resumes in `
};
export const TEASER_AD_SETTINGS = {
    TIME_BEFORE_AD: 5,
    TIME_AFTER_AD: 2,
    ADVERTISEMENT_MESSAGE: `Advertisement in `,
    CONTENT_MESSAGE: `Video resumes in `
};
export const navigationConstants=[{nav:'HOME',url:'/'},{nav:'ALL MOVIES',url:'/show-movies'},{nav:'NOW SHOWING',url:'/show-time'}]

export const trailerConstants={
    trailer_title:'Trailers',
    trailer_img_alt:'trailerImage',
    sign_in_decription:'You need to sign in to view Trailers. '

}