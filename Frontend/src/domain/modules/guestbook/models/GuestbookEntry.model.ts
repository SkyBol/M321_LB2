import { defaultSingleBottleReview, SingleBottleReview } from "../../review/models/ReviewEntry.model";

export type GuestbookEntry = {
    id: string;
    name: string;
    description: string;
    bottle_id: string;
    picture_id: string;
    create_date: Date;
}

export type GuestbookEntryForm = GuestbookEntry & SingleBottleReview;


export const defaultGuestbookEntry: GuestbookEntry = {
    id: "",
    name: "",
    description: "",
    bottle_id: "",
    picture_id: "",
    create_date: new Date()
}

export const defaulGuestbookEntryForm: GuestbookEntryForm = {
    ...defaultGuestbookEntry,
    ...defaultSingleBottleReview,
}

export default GuestbookEntry;