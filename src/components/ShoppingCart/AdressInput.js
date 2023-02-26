import { useFormContext, Controller } from "react-hook-form";

const AdressInput = {( name, label, required )} => {
    const { control } = useFormContext();

    return (
        <div>
            <Grid>
                <Controller as={TextField} 
                control={control} 
                fullwidth defaultValue="" 
                name={name} 
                label={label} 
                required={required}   />
            </Grid>

        </div>
    )}

export default AddressInput