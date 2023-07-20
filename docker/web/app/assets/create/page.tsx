import SelectField from '@/components/forms/SelectField'
import TextField from '@/components/forms/TextField'
import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/outline'


export default function CreateAsset() {
  return (
    <>
      <header>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-4">
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-700">Create Asset</h1>
        </div>
      </header>
      <main>
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <form>
            <div className="space-y-12">
              <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">Profile</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                  This information will be displayed publicly so be careful what you share.
                </p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <TextField name="assetName" id="assetName" placeholder="The ASA name" label="Asset Name" maxLength={32} autoComplete="off" required />
                  </div>
                  <div className="sm:col-span-3">
                    <TextField name="unitName" id="unitName" placeholder="The ASA's unit name" label="Unit Name" maxLength={8} autoComplete="off" required />
                  </div>
                </div>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <TextField type="number" name="assetTotal" id="assetTotal" placeholder="The ASA name" label="Total" autoComplete="off" min={1} required />
                  </div>
                  <div className="sm:col-span-3">
                    <TextField type="number" name="decimals" id="decimals" placeholder="The number of of digits to use after the decimal point" label="Decimals" min={0} max={19} autoComplete="off" required />
                  </div>
                </div>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <TextField type="url" name="url" id="url" placeholder="URL for the asset (optional)" label="URL" autoComplete="off" maxLength={96} />
                  </div>
                  <div className="sm:col-span-3">
                    <TextField name="metaDataHash" id="metaDataHash" placeholder="The asset's metadata hash (optional)" label="Metadata Hash" maxLength={32} autoComplete="off" />
                  </div>
                </div>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <SelectField name="defaultFrozen" id="defaultFrozen" label="Default Frozen">
                      <option value="false">No</option>
                      <option value="true">Yes</option>
                    </SelectField>
                  </div>
                </div>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <TextField name="managerAddr" id="managerAddr" placeholder="Manager address (optional)" label="Manager Address" minLength={58} maxLength={58} autoComplete="off" />
                  </div>
                  <div className="sm:col-span-3">
                    <TextField name="reserveAddr" id="reserveAddr" placeholder="Reserve address (optional)" label="Reserve Address" minLength={58} maxLength={58} autoComplete="off" />
                  </div>
                </div>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <TextField name="freezeAddr" id="freezeAddr" placeholder="Freeze address (optional)" label="Freeze Address" minLength={58} maxLength={58} autoComplete="off" />
                  </div>
                  <div className="sm:col-span-3">
                    <TextField name="clawbackAddr" id="clawbackAddr" placeholder="Clawback address (optional)" label="Clawback Address" minLength={58} maxLength={58} autoComplete="off" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  )
}