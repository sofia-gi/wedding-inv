export type Parent = {
    name: string;
    account_number: string;
};

export type Person = {
    name: string;
    account_number: string;
    parents: {
        mother: Parent;
        father: Parent;
    };
};

export type KakaoTalk = {
    api_token: string;
    wedding_invitation_url: string;
    share_image: string;
};

export type WeddingData = {
    date: string;
    location: string;
    gretting: string;
    groom: Person;
    bride: Person;
    kakaotalk: KakaoTalk;
};
