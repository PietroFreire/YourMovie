import { IsNotEmpty, IsDateString } from "class-validator";

export class createGenreDto{
    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    image: string;
}
