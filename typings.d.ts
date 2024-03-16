import { ReactNode } from "react";

interface SanityBody {
  _createdAt: string;
  _id: string;
  _rev: string;
  _updatedaT: string;
}
export interface Image {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface PageInfoProps extends SanityBody {
  _type: "pageInfo";
  name: string;
  title: string;
  heroImage: Image;
  profilePicture: Image;
  message: string;
  email: string;
  phoneNumber: String;
  coordinates: { lat: number; long: number };
  quote: string;
  aboutText: string;
}

export interface ProjectsProps extends SanityBody {
  _type: "projects";
  name: string;
  description: string;
  imagesGallery: Image[];
  url: string;
  tech: string[];
  variants: string;
}

export interface SocialsProps extends SanityBody {
  _type: "social";
  name: string;
  url: string;
}
