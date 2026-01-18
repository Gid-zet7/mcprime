import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IVideo extends Document {
    title: string;
    description: string;
    category: string;
    thumbnailUrl: string;
    videoUrl: string;
    s3Key: string; // To delete from bucket if needed
    isPublished: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const VideoSchema: Schema<IVideo> = new Schema(
    {
        title: {
            type: String,
            required: [true, 'Please provide a title for this video.'],
            maxlength: [100, 'Title cannot be more than 100 characters'],
        },
        description: {
            type: String,
            maxlength: [1000, 'Description cannot be more than 1000 characters'],
        },
        category: {
            type: String,
            required: [true, 'Please specify the category.'],
            enum: ['Commercials', 'Short Films', 'UGC', 'AI Films', 'Social Ads', 'Documentary', 'Other'],
            default: 'Other',
        },
        thumbnailUrl: {
            type: String,
            required: [true, 'Please provide a thumbnail URL.'],
        },
        videoUrl: {
            type: String,
            required: [true, 'Please provide a video URL.'],
        },
        s3Key: {
            type: String,
            required: true,
        },
        isPublished: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

// Check if model already exists to prevent overwrite error in dev hot reload
const Video: Model<IVideo> = mongoose.models.Video || mongoose.model<IVideo>('Video', VideoSchema);

export default Video;
