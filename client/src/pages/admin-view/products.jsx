import ProductImageUpload from "@/components/admin-view/image-upload"
import CommonForm from "@/components/common/form"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { addProductFormElements } from "@/config"
import { Fragment, useState } from "react"


const initaialFormData = {
    image: null,
    title: "",
    description: "",
    category: "",
    brand: "",
    price: "",
    salePrice: "",
    totalStock: "",
}

function AdminProducts(){

    const [openCreateProductsDialog, setOpenCreateProductsDialog ] = useState(false)
    const [formData, setFormData] = useState(initaialFormData)

    const [imageFile, setImageFile] = useState(null)
    const [uploadedImageUrl, setUploadedImageUrl] = 
    useState('')

    const [imageLoadingState,setImageLoadingState] = useState(false)


    function onSubmit(){

    }

    console.log(formData , 'formData')

    return(
        <Fragment>
            <div className="mb-5 w-full flex justify-end">
                <Button onClick={() => setOpenCreateProductsDialog(true)}>Add New product</Button>
            </div>
            <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4"></div>
            <Sheet open={openCreateProductsDialog} onOpenChange={()=> {
                setOpenCreateProductsDialog(false)
            }}> 
                <SheetContent side="right" className='overflow-auto'>
                    <SheetHeader>
                        <SheetTitle>Add New Product</SheetTitle>
                    </SheetHeader>
                    <ProductImageUpload imageFile={imageFile} setImageFile={setImageFile} uploadedImageUrl={uploadedImageUrl} setUploadedImageUrl={setUploadedImageUrl}
                    setImageLoadingState = {setImageLoadingState}/>
                    <div className="py-6 px-4">
                        <CommonForm 
                        
                        onSubmit={onSubmit}
                        formData={formData} setformData={setFormData} buttonText='Add Product'

                        formControls={addProductFormElements}
                        />
                    </div>
                </SheetContent>
            </Sheet>
        </Fragment>
    )
}

export default AdminProducts
