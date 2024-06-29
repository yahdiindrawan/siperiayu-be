<template>
    <section id="kalkulator" class="bg-beige">
        <div class="max-w-7xl mx-auto py-12 px-8">
          <div class="flex">
            <h2 class="text-primary font-bold text-3xl flex">
              <p class="underline underline-offset-8 decoration-black">K</p>
              alkulator PBG
            </h2>
          </div>
          <p class="pt-2">Simulasi perhitungan retribusi PBG</p>
          <div class="space-y-8 py-4">
            <!-- Fungsi Bangunan -->
            <div class="bg-white rounded-lg p-2">
              <div class="p-4">
                <table class="hidden md:block min-w-full border-2 border-gray-200 rounded-lg p-4">
                  <tr>
                    <td colspan="3" rowspan="2" scope="col" class="uppercase border-2 border-gray-200 py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-0"></td>
                    <th scope="col" class="px-3 uppercase border-2 border-gray-200 py-3.5 text-center text-sm font-semibold text-gray-900">Fungsi Bangunan</th>
                    <th scope="col" class="px-3 uppercase border-2 border-gray-200 py-3.5 text-center text-sm font-semibold text-gray-900">Indeks</th>
                    <th scope="col" class="px-3 uppercase border-2 border-gray-200 py-3.5 text-center text-sm font-semibold text-gray-900">Nilai (A)</th>
                  </tr>
                  <tr>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">
                      <select v-model="form.fungsiBangunan" @change="changeFungsiBangunan" id="location" name="location" class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-gray-600 sm:text-sm sm:leading-6">
                        <option :value="null">- Pilih Fungsi Bangunan -</option>
                        <option v-for="(list, index) in dataFungsiBangunan" :key="index" :value="list" class="py-4">
                          {{list.name}}
                        </option>
                      </select>
                    </td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">{{ form.fungsiBangunan?.value || 0 }}</td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">{{ form.valueFungsiBangunan || 0 }}</td>
                  </tr>
                  <tr>
                    <th scope="col" class="px-3 uppercase border-2 border-gray-200 py-3.5 text-center text-sm font-semibold text-gray-900">No</th>
                    <th scope="col" class="px-3 uppercase border-2 border-gray-200 py-3.5 text-center text-sm font-semibold text-gray-900">Klasifikasi</th>
                    <th scope="col" class="px-3 uppercase border-2 border-gray-200 py-3.5 text-center text-sm font-semibold text-gray-900">Bobot</th>
                    <th scope="col" class="px-3 uppercase border-2 border-gray-200 py-3.5 text-center text-sm font-semibold text-gray-900">Parameter</th>
                    <th scope="col" class="px-3 uppercase border-2 border-gray-200 py-3.5 text-center text-sm font-semibold text-gray-900">Indeks</th>
                    <th scope="col" class="px-3 uppercase border-2 border-gray-200 py-3.5 text-center text-sm font-semibold text-gray-900">Nilai (B)</th>
                  </tr>
                  <tr v-for="(data, index) in dataClasifications" :key="index">
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">{{index + 1}}</td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">{{ data.clasification}}</td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">{{ data.weight }}</td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">
                      <select v-model="dataClasifications[index].selectedParameter" @change="changeClassification(index)" id="location" name="location" class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-gray-600 sm:text-sm sm:leading-6">
                        <option :value="null">- Pilih {{ data.clasification }} -</option>
                        <option v-for="(list, index) in data.parameters" :key="index" :value="list" class="py-4">
                          {{list.name}}
                        </option>
                      </select>
                    </td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">{{ dataClasifications[index].selectedParameter?.value || 0 }}</td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">{{ dataClasifications[index].value || 0 }}</td>
                  </tr>

                  <tr>
                    <th colspan="5" scope="col" class="px-8 uppercase border-2 border-gray-200 py-3.5 text-right text-sm font-semibold text-gray-900">Jumlah (B)</th>
                    <th scope="col" class="px-3 border-2 border-gray-200 py-3.5 text-center text-sm text-gray-900">{{ form.valueClassification || 0.00 }}</th>
                  </tr>
                  <tr>
                    <td colspan="3" rowspan="2" scope="col" class="uppercase border-2 border-gray-200 py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-0"></td>
                    <th scope="col" class="px-3 uppercase border-2 border-gray-200 py-3.5 text-center text-sm font-semibold text-gray-900">Faktor Kepemilikan</th>
                    <th scope="col" class="px-3 uppercase border-2 border-gray-200 py-3.5 text-center text-sm font-semibold text-gray-900">Indeks</th>
                    <th scope="col" class="px-3 uppercase border-2 border-gray-200 py-3.5 text-center text-sm font-semibold text-gray-900">Nilai (C)</th>
                  </tr>
                  <tr>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">
                      <select v-model="form.faktorKepemilikan" @change="changeFaktorKepemilikan" id="location" name="location" class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-gray-600 sm:text-sm sm:leading-6">
                        <option :value="null">- Pilih Faktor Kepemilikan -</option>
                        <option v-for="(list, index) in dataFaktorKepemilikan" :key="index" :value="list" class="py-4">
                          {{list.name}}
                        </option>
                      </select>
                    </td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">{{ form.faktorKepemilikan?.value || 0 }}</td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">{{ form.valueFaktorKepemilikan || 0 }}</td>
                  </tr>
                  <tr>
                    <th colspan="5" scope="col" class="px-8 border-2 border-gray-200 py-3.5 text-right text-sm font-semibold text-gray-900">Indeks Terintegrasi (IT) = A x B x C</th>
                    <th scope="col" class="px-3 border-2 border-gray-200 py-3.5 text-center text-sm text-gray-900">{{ form.indeksTerintegrasi || 0.00 }}</th>
                  </tr>
                </table>
              </div>
            </div>

          </div>
        </div>
      </section>
</template>
<script setup>
import { toCurrency } from '@/helpers'
import { reactive } from 'vue'
const dataFungsiBangunan = reactive([
  { name: 'Hunian (< 100 m2 dan < 2 lantai)', value: 0.15 },
  { name: 'Hunian (> 100 m2 dan > 2 lantai)', value: 0.17 },
  { name: 'Keagamaan', value: 0 },
  { name: 'Usaha', value: 0.7 },
  { name: 'Usaha UMKM', value: 0.5 },
  { name: 'Sosial & Budaya', value: 0.3 },
  { name: 'Khusus', value: 1 },
  { name: 'Ganda/Campuran (≤ 500 m2 dan ≤ 2 lantai)', value: 0.6 },
  { name: 'Ganda/Campuran (> 500 m2 dan > 2 lantai)', value: 0.8 },
])

const dataClasifications = reactive([
  {
    clasification: 'Kompleksitas', 
    weight: 0.3,
    parameters: [
      { name: 'Sederhana', value: 1 },
      { name: 'Tidak Sederhana', value: 2}
    ],
    selectedParameter: null,
    value: null
  },
  {
    clasification: 'Permanensi', 
    weight: 0.2,
    parameters: [
      { name: 'Non Permanaen', value: 1 },
      { name: 'Permanen', value: 2}
    ],
    selectedParameter: null,
    value: null
  },
  {
    clasification: 'Ketinggian', 
    weight: 0.5,
    parameters: [
      { name: '1 Lantai', value: 1 },
      { name: '2 Lantai', value: 1.09 },
      { name: '3 Lantai', value: 1.12 },
      { name: '4 Lantai', value: 1.135 },
      { name: '5 Lantai', value: 1.162 },
      { name: '6 Lantai', value: 1.197 },
      { name: '7 Lantai', value: 1.236 },
      { name: '8 Lantai', value: 1.265 },
      { name: '9 Lantai', value: 1.299 },
      { name: '10 Lantai', value: 1.333 },
    ],
    selectedParameter: null,
    value: null
  }
])

const dataFaktorKepemilikan = reactive([
  { name: 'Perorangan/Badan Usaha', value: 1 },
  { name: 'Negara', value: 0 }
])

const form = reactive({
  fungsiBangunan: null,
  valueFungsiBangunan: null,
  classifications: null,
  valueClassification: null,
  faktorKepemilikan: null,
  valueFaktorKepemilikan: null,
  indeksTerintegrasi: null
})


const changeFungsiBangunan = (event) => {
  form.fungsiBangunan ? form.valueFungsiBangunan = form.fungsiBangunan.value : form.valueFungsiBangunan = 0
  updateIndeksTerintegrasi()
}

const changeClassification = (index) => {
  if (dataClasifications[index].selectedParameter) {
    dataClasifications[index].value = dataClasifications[index].selectedParameter.value * dataClasifications[index].weight
  } else {
    dataClasifications[index].value = 0
  }
  form.valueClassification = dataClasifications.reduce((n, { value }) => n + value, 0).toFixed(2)
  updateIndeksTerintegrasi()
}

const changeFaktorKepemilikan = (event) => {
  form.faktorKepemilikan ? form.valueFaktorKepemilikan = form.faktorKepemilikan.value : form.valueFaktorKepemilikan = 0
  updateIndeksTerintegrasi()
}

const updateIndeksTerintegrasi = () => {
  form.indeksTerintegrasi = (form.valueFungsiBangunan * form.valueClassification * form.valueFaktorKepemilikan).toFixed(2)
}
</script>