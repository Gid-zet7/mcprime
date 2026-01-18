import { UploadForm } from "@/components/admin/UploadForm";

export default function Dashboard() {
    return (
        <div className="container mx-auto py-10">
            <div className="mb-10 text-center">
                <h2 className="text-3xl font-bold mb-4">Content Management</h2>
                <p className="text-neutral-400">Upload and manage your video portfolio.</p>
            </div>

            <UploadForm />

            {/* 
        Ideally, we would also list existing videos here for deletion/editing. 
        For MVP, we just have the upload form as requested "Upload Dashboard".
      */}
        </div>
    );
}
