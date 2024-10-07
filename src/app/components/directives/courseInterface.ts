export interface Course {
    id: number;
    name: string;
    enrolled: boolean;
    duration: number;
    certificate?: boolean;
    checkInTime?: Date;
    checkOutTime?: Date;
}