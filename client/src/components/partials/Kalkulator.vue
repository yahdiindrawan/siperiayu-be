<template>
    <section id="kalkulator" class="bg-beige">
        <div class="max-w-7xl mx-auto py-8 md:py-12 px-4 md:px-8">
          <div class="flex">
            <h2 class="text-primary font-bold text-3xl flex">
              <p class="underline underline-offset-8 decoration-black">K</p>
              alkulator PBG
            </h2>
          </div>
          <p class="pt-2">Simulasi perhitungan retribusi PBG</p>
          <div class="py-4">
            <!-- Desktop Display -->
            <div class="space-y-6 hidden md:block">
              <div class="bg-white rounded-lg p-2">
                <div class="p-4">
                  <table class="min-w-full border-2 border-gray-200 rounded-lg p-4">
                    <tr>
                      <td colspan="3" rowspan="2" scope="col" class="uppercase border-2 border-gray-200 py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-0"></td>
                      <th scope="col" class="px-3 uppercase border-2 border-gray-200 py-3.5 text-center text-sm font-semibold text-gray-900">Fungsi Bangunan</th>
                      <th scope="col" class="px-3 uppercase border-2 border-gray-200 py-3.5 text-center text-sm font-semibold text-gray-900">Indeks</th>
                      <th scope="col" class="px-3 uppercase border-2 border-gray-200 py-3.5 text-center text-sm font-semibold text-gray-900">Nilai (A)</th>
                    </tr>
                    <tr>
                      <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">
                        <select v-model="form.fungsiBangunan" @change="changeHandle('Fungsi Bangunan')" id="location" name="location" class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-gray-600 sm:text-sm sm:leading-6">
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
                        <select v-model="dataClasifications[index].selectedParameter" @change="changeHandle('Klasifikasi', index)" id="location" name="location" class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-gray-600 sm:text-sm sm:leading-6">
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
                        <select v-model="form.faktorKepemilikan" @change="changeHandle('Faktor Kepemilikan')" id="location" name="location" class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-gray-600 sm:text-sm sm:leading-6">
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

              <div class="bg-white rounded-lg p-2">
                <div class="p-4">
                  <table class="min-w-full border-2 border-gray-200 rounded-lg p-4">
                    <tr>
                      <th scope="col" class="px-3 uppercase border-2 border-gray-200 py-3.5 text-center text-sm font-semibold text-gray-900">Luas Bangunan</th>
                      <th scope="col" class="px-3 uppercase border-2 border-gray-200 py-3.5 text-center text-sm font-semibold text-gray-900">Indeks Lokalitas</th>
                      <th scope="col" class="px-3 uppercase border-2 border-gray-200 py-3.5 text-center text-sm font-semibold text-gray-900">Indeks Kegiatan</th>
                      <th scope="col" class="px-3 uppercase border-2 border-gray-200 py-3.5 text-center text-sm font-semibold text-gray-900">SHST</th>
                      <th scope="col" class="px-3 uppercase border-2 border-gray-200 py-3.5 text-center text-sm font-semibold text-gray-900">Jumlah</th>
                    </tr>
                    <tr>
                      <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">
                        <div class="mt-2 flex rounded-md shadow-sm">
                          <input v-model="formIndeksKegiatan.luasBangunan" @change="updatePerhitungan" type="number" name="company-website" id="company-website" class="block w-full px-4 min-w-0 flex-1 rounded-none rounded-l-3xl border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" placeholder="" />
                          <span class="inline-flex bg-gray-200 items-center rounded-r-3xl border border-l-0 border-gray-300 px-3 text-gray-500 sm:text-sm">M <sup>2</sup></span>
                        </div>
                      </td>
                      <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">{{ formIndeksKegiatan.indeksLokalitas }} %</td>
                      <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">
                        <select v-model="formIndeksKegiatan.indeksKegiatan" @change="changeHandle('Indeks Kegiatan')" id="location" name="location" class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-gray-600 sm:text-sm sm:leading-6">
                          <option :value="null">- Pilih Indeks Kegiatan -</option>
                          <option v-for="(list, index) in dataIndeksKegiatan" :key="index" :value="list" class="py-4">
                            {{list.name}}
                          </option>
                        </select>
                      </td>
                      <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-right text-sm text-gray-900">{{ toCurrency(formIndeksKegiatan.shst) }}</td>
                      <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-right text-sm text-gray-900">{{ toCurrency(formIndeksKegiatan.jumlah) || 0.000 }}</td>
                    </tr>
                    <tr>
                      <th colspan="4" scope="col" class="px-8 border-2 border-gray-200 py-3.5 text-right text-sm font-semibold text-gray-900">Jumlah Retribusi Bangunan Gedung</th>
                      <th scope="col" class="px-3 border-2 border-gray-200 py-3.5 text-right text-sm text-gray-900">{{ toCurrency(formIndeksKegiatan.jumlah) || 0.000 }}</th>
                    </tr>
                  </table>
                </div>
              </div>

              <div class="bg-white rounded-lg p-2">
                <div class="p-4">
                  <table class="min-w-full border-2 border-gray-200 rounded-lg p-4">
                    <tr>
                      <th scope="col" class="px-3 uppercase border-2 border-gray-200 py-3.5 text-center text-sm font-semibold text-gray-900">No</th>
                      <th scope="col" class="px-3 uppercase border-2 border-gray-200 py-3.5 text-center text-sm font-semibold text-gray-900">Jenis Prasarana</th>
                      <th scope="col" class="px-3 uppercase border-2 border-gray-200 py-3.5 text-center text-sm font-semibold text-gray-900">Bangunan</th>
                      <th scope="col" class="px-3 uppercase border-2 border-gray-200 py-3.5 text-center text-sm font-semibold text-gray-900">Satuan</th>
                      <th scope="col" class="px-3 uppercase border-2 border-gray-200 py-3.5 text-center text-sm font-semibold text-gray-900">Harga Satuan Prasarana (HSPBG)</th>
                      <th scope="col" class="px-3 uppercase border-2 border-gray-200 py-3.5 text-center text-sm font-semibold text-gray-900">Luas Prasarana Bangunan</th>
                      <th scope="col" class="px-3 uppercase border-2 border-gray-200 py-3.5 text-center text-sm font-semibold text-gray-900">Nilai Retribusi</th>
                    </tr>
                    <template v-for="(prasarana, indexPrasarana) in dataPrasarana">
                      <tr v-for="(data, index) in prasarana.data" :key="index">
                        <!-- {{ prasarana.data.length }} -->
                        <td v-if="index===0" :rowspan="prasarana.data.length" scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">{{  indexPrasarana + 1 }}</td>
                        <td v-if="index===0" :rowspan="prasarana.data.length" scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-left text-sm text-gray-900">{{ prasarana.jenis }}</td>
                        <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-left text-sm text-gray-900">{{ data.bangunan }}</td>
                        <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-left text-sm text-gray-900">
                          <span v-html="data.satuan"></span>
                        </td>
                        <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-right text-sm text-gray-900">{{ toCurrency(data.hspbg) || 0.000 }}</td>
                        <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-left text-sm text-gray-900">
                          <div class="mt-2 flex rounded-md shadow-sm">
                            <input v-model="data.luasPrasarana" @change="updateNilaiRetribusiPrasarana(indexPrasarana, index)" type="number" name="company-website" id="company-website" class="block w-full px-4 min-w-0 flex-1 rounded-none rounded-l-3xl border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" placeholder="" />
                            <span v-html="data.satuanLuas" class="inline-flex bg-gray-200 items-center rounded-r-3xl border border-l-0 border-gray-300 px-3 text-gray-500 sm:text-sm"></span>
                          </div>
                        </td>
                        <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-right text-sm text-gray-900">{{ toCurrency(data.nilaiRetribusi) || 0.000 }}</td>
                      </tr>
                    </template>
                    <tr>
                      <th colspan="6" scope="col" class="px-8 border-2 border-gray-200 py-3.5 text-right text-sm font-semibold text-gray-900">Jumlah Retribusi Prasarana Bangunan Gedung</th>
                      <th scope="col" class="px-3 border-2 border-gray-200 py-3.5 text-right text-sm text-gray-900">{{ toCurrency(form.jumlahRetribusiPrasarana) || 0.000 }}</th>
                    </tr>
                  </table>
                </div>
              </div>

              <div class="bg-white rounded-lg p-2">
                <div class="p-4">
                  <table class="min-w-full border-2 border-gray-200 rounded-lg p-4">
                    <tr>
                      <th scope="col" class="px-3 uppercase border-2 border-gray-200 py-3.5 text-right text-sm font-semibold text-gray-900">TOTAL NILAI RETRIBUSI</th>
                      <th scope="col" class="px-3 border-2 border-gray-200 py-3.5 text-left text-sm font-semibold text-gray-900">{{ toCurrency(form.jumlahRetribusiSeluruhnya) || 0.000 }}</th>
                    </tr>
                  </table>
                </div>
              </div>
            </div>

            <!-- Mobile Display -->
            <div class="md:hidden space-y-6">
              <div class="bg-white rounded-lg p-2">
                <div class="p-4 space-y-3">
                    <div class="min-w-full border-2 border-gray-200 rounded-lg divide-y-2">
                      <div class="py-3 px-4 text-gray-900 text-sm space-y-3">
                        <h6 class="uppercase font-semibold">Fungsi Bangunan</h6>
                        <select v-model="form.fungsiBangunan" @change="changeHandle('Fungsi Bangunan')" id="location" name="location" class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-gray-600 sm:text-sm sm:leading-6">
                          <option :value="null">- Pilih Fungsi Bangunan -</option>
                          <option v-for="(list, index) in dataFungsiBangunan" :key="index" :value="list" class="py-4">
                            {{list.name}}
                          </option>
                        </select>
                      </div>
                      <div class="py-3 px-4 text-gray-900 flex justify-between items-center text-sm space-y-2">
                        <h6 class="uppercase font-semibold">Indeks</h6>
                        <p>{{ form.fungsiBangunan?.value || 0 }}</p>
                      </div>
                      <div class="py-3 px-4 text-gray-900 flex justify-between items-center text-sm space-y-2">
                        <h6 class="uppercase font-semibold">Nilai (A)</h6>
                        <p>{{ form.valueFungsiBangunan || 0 }}</p>
                      </div>
                    </div>
  
                    <div v-for="(data, index) in dataClasifications" :key="index" class="min-w-full border-2 border-gray-200 rounded-lg divide-y-2">
                      <div class="py-3 px-4 text-gray-900 flex justify-between items-center text-sm space-y-2">
                        <h6 class="uppercase font-semibold">Klasifikasi</h6>
                        <p>{{ data.clasification}}</p>
                      </div>
                      <div class="py-3 px-4 text-gray-900 flex justify-between items-center text-sm space-y-2">
                        <h6 class="uppercase font-semibold">Bobot</h6>
                        <p>{{ data.weight}}</p>
                      </div>
                      <div class="py-3 px-4 text-gray-900 text-sm space-y-3">
                        <h6 class="uppercase font-semibold">Parameter</h6>
                        <select v-model="dataClasifications[index].selectedParameter" @change="changeHandle('Klasifikasi', index)" id="location" name="location" class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-gray-600 sm:text-sm sm:leading-6">
                          <option :value="null">- Pilih {{ data.clasification }} -</option>
                          <option v-for="(list, index) in data.parameters" :key="index" :value="list" class="py-4">
                            {{list.name}}
                          </option>
                        </select>
                      </div>
                      <div class="py-3 px-4 text-gray-900 flex justify-between items-center text-sm space-y-2">
                        <h6 class="uppercase font-semibold">Indeks</h6>
                        <p>{{ dataClasifications[index].selectedParameter?.value || 0 }}</p>
                      </div>
                      <div class="py-3 px-4 text-gray-900 flex justify-between items-center text-sm space-y-2">
                        <h6 class="uppercase font-semibold">Nilai (B)</h6>
                        <p>{{ dataClasifications[index].value || 0 }}</p>
                      </div>
                    </div>
  
                    <div class="min-w-full border-2 border-gray-200 rounded-lg divide-y-2">
                      <div class="py-3 px-4 text-gray-900 flex justify-between items-center text-sm space-y-2">
                        <h6 class="uppercase font-semibold">Jumlah (B)</h6>
                        <p>{{ form.valueClassification || 0.00 }}</p>
                      </div>
                    </div>
  
                    <div class="min-w-full border-2 border-gray-200 rounded-lg divide-y-2">
                      <div class="py-3 px-4 text-gray-900 text-sm space-y-3">
                        <h6 class="uppercase font-semibold">Faktor Kepemilikan</h6>
                        <select v-model="form.faktorKepemilikan" @change="changeHandle('Faktor Kepemilikan')" id="location" name="location" class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-gray-600 sm:text-sm sm:leading-6">
                          <option :value="null">- Pilih Faktor Kepemilikan -</option>
                          <option v-for="(list, index) in dataFaktorKepemilikan" :key="index" :value="list" class="py-4">
                            {{list.name}}
                          </option>
                        </select>
                      </div>
                      <div class="py-3 px-4 text-gray-900 flex justify-between items-center text-sm space-y-2">
                        <h6 class="uppercase font-semibold">Indeks</h6>
                        <p>{{ form.faktorKepemilikan?.value || 0 }}</p>
                      </div>
                      <div class="py-3 px-4 text-gray-900 flex justify-between items-center text-sm space-y-2">
                        <h6 class="uppercase font-semibold">Nilai (C)</h6>
                        <p>{{ form.valueFaktorKepemilikan || 0 }}</p>
                      </div>
                    </div>
  
                    <div class="min-w-full border-2 border-gray-200 rounded-lg divide-y-2">
                      <div class="py-3 px-4 text-gray-900 font-semibold flex justify-between items-center text-sm space-y-2">
                        <h6 class="uppercase font-semibold">Indeks Terintegrasi (IT) = A x B x C</h6>
                        <p>{{ form.indeksTerintegrasi || 0.00 }}</p>
                      </div>
                    </div>                  
  
                  </div>
  
              </div>

              <div class="bg-white rounded-lg p-2">
                <div class="p-4 space-y-3">
                    <div class="min-w-full border-2 border-gray-200 rounded-lg divide-y-2">
                      <div class="py-3 px-4 text-gray-900 text-sm space-y-3">
                        <h6 class="uppercase font-semibold">Luas Bangunan</h6>
                        <div class="mt-2 flex rounded-md shadow-sm">
                          <input v-model="formIndeksKegiatan.luasBangunan" @change="updatePerhitungan" type="number" name="company-website" id="company-website" class="block w-full px-4 min-w-0 flex-1 rounded-none rounded-l-3xl border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" placeholder="" />
                          <span class="inline-flex bg-gray-200 items-center rounded-r-3xl border border-l-0 border-gray-300 px-3 text-gray-500 sm:text-sm">M <sup>2</sup></span>
                        </div>
                      </div>
                      <div class="py-3 px-4 text-gray-900 flex justify-between items-center text-sm space-y-2">
                        <h6 class="uppercase font-semibold">Indeks Lokalitas</h6>
                        <p>{{ formIndeksKegiatan.indeksLokalitas }} %</p>
                      </div>
                      <div class="py-3 px-4 text-gray-900 text-sm space-y-2">
                        <h6 class="uppercase font-semibold">Indeks Kegiatan</h6>
                        <select v-model="formIndeksKegiatan.indeksKegiatan" @change="changeHandle('Indeks Kegiatan')" id="location" name="location" class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-gray-600 sm:text-sm sm:leading-6">
                          <option :value="null">- Pilih Indeks Kegiatan -</option>
                          <option v-for="(list, index) in dataIndeksKegiatan" :key="index" :value="list" class="py-4">
                            {{list.name}}
                          </option>
                        </select>
                      </div>
                      <div class="py-3 px-4 text-gray-900 flex justify-between items-center text-sm space-y-2">
                        <h6 class="uppercase font-semibold">SHST</h6>
                        <div>
                          <p>{{ toCurrency(formIndeksKegiatan.shst) }}</p>
                        </div>
                      </div>
                      <div class="py-3 px-4 text-gray-900 flex justify-between items-center text-sm space-y-2">
                        <h6 class="uppercase font-semibold">Jumlah</h6>
                        <div>
                          <p>{{ toCurrency(formIndeksKegiatan.jumlah) || 0.000 }}</p>
                        </div>
                      </div>
                    </div>

                    <div class="min-w-full border-2 border-gray-200 rounded-lg divide-y-2">
                      <div class="py-3 px-4 text-gray-900 flex justify-between items-center text-sm space-y-2">
                        <h6 class="uppercase font-semibold">Jumlah Retribusi Bangunan Gedung</h6>
                        <div class="font-semibold text-right">
                          <p>{{ toCurrency(formIndeksKegiatan.jumlah) || 0.000 }}</p>
                        </div>
                      </div>
                    </div>                             
  
                  </div>
  
              </div>

              <div class="bg-white rounded-lg p-2">
                <div class="p-4 space-y-3">
                  <template v-for="(prasarana, indexPrasarana) in dataPrasarana">
                    <div v-for="(data, index) in prasarana.data" :key="index" class="min-w-full border-2 border-gray-200 rounded-lg divide-y-2">
                      <div class="py-3 px-4 text-gray-900 flex justify-between items-center text-sm space-y-2">
                        <h6 class="uppercase font-semibold">Jenis Prasarana</h6>
                        <p >{{ prasarana.jenis }}</p>
                      </div>
                      <div class="py-3 px-4 text-gray-900 flex justify-between items-center text-sm space-y-2">
                        <h6 class="uppercase font-semibold">Bangunan</h6>
                        <p>{{data.bangunan}}</p>
                      </div>
                      <div class="py-3 px-4 text-gray-900 flex justify-between items-center text-sm space-y-2">
                        <h6 class="uppercase font-semibold">Satuan</h6>
                        <span v-html="data.satuan"></span>
                      </div>
                      <div class="py-3 px-4 text-gray-900 flex justify-between items-center text-sm space-y-2">
                        <h6 class="uppercase font-semibold">Harga Satuan Prasarana (HSPBG)</h6>
                        <p>{{ toCurrency(data.hspbg) || 0.000 }}</p>
                      </div>
                      <div class="py-3 px-4 text-gray-900 text-sm space-y-3">
                        <h6 class="uppercase font-semibold">Luas Prasarana Bangunan</h6>
                        <div class="mt-2 flex rounded-md shadow-sm">
                          <input v-model="data.luasPrasarana" @change="updateNilaiRetribusiPrasarana(indexPrasarana, index)" type="number" name="company-website" id="company-website" class="block w-full px-4 min-w-0 flex-1 rounded-none rounded-l-3xl border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" placeholder="" />
                            <span v-html="data.satuanLuas" class="inline-flex bg-gray-200 items-center rounded-r-3xl border border-l-0 border-gray-300 px-3 text-gray-500 sm:text-sm"></span>
                        </div>
                      </div>
                      <div class="py-3 px-4 text-gray-900 flex justify-between items-center text-sm space-y-2">
                        <h6 class="uppercase font-semibold">Nilai Retribusi</h6>
                        <p>{{ toCurrency(data.nilaiRetribusi) || 0.000 }}</p>
                      </div>
                    </div>
                  </template>
                </div>
              </div>

              <div class="bg-white rounded-lg p-2">
                <div class="p-4 space-y-3">
                  <div class="min-w-full border-2 border-gray-200 rounded-lg divide-y-2">
                      <div class="py-3 px-4 text-gray-900 flex justify-between items-center text-sm space-y-2">
                        <h6 class="uppercase font-semibold">TOTAL NILAI RETRIBUSI</h6>
                        <div class="font-semibold text-right">
                          <p>{{ toCurrency(form.jumlahRetribusiSeluruhnya) || 0.000 }}</p>
                        </div>
                      </div>
                    </div>                             
                </div>
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

const dataIndeksKegiatan = reactive([
{ name: 'Rusak Sedang - Pelestarian Madya', value: 0.225 },
  { name: 'Rusak Berat - Pelestarian Pratama', value: 0.325 },
  { name: 'Pembangunan Gedung Baru', value: 1 },
  { name: 'Pelestarian Utama', value: 0.15 }
])

const dataPrasarana = reactive([
  {
    jenis: 'Konstruksi pembatas/ penahan/pengaman',
    data: [
      {
        bangunan: 'Pagar',
        satuan: 'M',
        hspbg: 25200,
        luasPrasarana: 0,
        satuanLuas: 'M<sup>2</sup>',
        nilaiRetribusi: 0
      }
    ]
  },
  {
    jenis: 'Konstruksi perkerasan aspal, beton',
    data: [
      {
        bangunan: '',
        satuan: 'M<sup>2</sup>',
        hspbg: 2300,
        luasPrasarana: 0,
        satuanLuas: 'M<sup>2</sup>',
        nilaiRetribusi: 0
      }
    ],
  },
  {
    jenis: 'Konstruksi reklame/ papan nama',
    data: [
      {
        bangunan: 'Billboard papan iklan',
        satuan: 'Unit dan penambahannya (Luas maksimum 12 m .Apabila ada penambahan luas unit, dikenakan biaya tambahan Rp 500.000,00/m )',
        hspbg: 6600000,
        luasPrasarana: 0,
        satuanLuas: 'Unit',
        nilaiRetribusi: 0
      },
      {
        bangunan: 'Papan nama (berdiri sendiri atau berupa tembok pagar)',
        satuan: 'Unit dan penambahannya (Luas maksimum 2 m<sup>2</sup>. Apabila ada penambahan luas unit, dikenakan biaya tambahan Rp 150.000,00/m )',
        hspbg: 306000,
        luasPrasarana: 0,
        satuanLuas: 'Unit',
        nilaiRetribusi: 0
      }
    ]
  }
])

const form = reactive({
  fungsiBangunan: null,
  valueFungsiBangunan: null,
  classifications: null,
  valueClassification: null,
  faktorKepemilikan: null,
  valueFaktorKepemilikan: null,
  indeksTerintegrasi: null,
  jumlahRetribusiPrasarana: 0,
  jumlahRetribusiSeluruhnya: 0
})

const formIndeksKegiatan = reactive({
  luasBangunan: null,
  indeksLokalitas: 0.5,
  indeksKegiatan: null,
  valueIndeksKegiatan: null,
  shst: 5350000,
  jumlah: 0
})

const changeHandle = (kategori, index) => {
  if (kategori === 'Fungsi Bangunan') {
    form.fungsiBangunan ? form.valueFungsiBangunan = form.fungsiBangunan.value : form.valueFungsiBangunan = 0  
  } else if (kategori === 'Klasifikasi') {
    if (dataClasifications[index].selectedParameter) {
      dataClasifications[index].value = dataClasifications[index].selectedParameter.value * dataClasifications[index].weight
    } else {
      dataClasifications[index].value = 0
    }
    form.valueClassification = dataClasifications.reduce((n, { value }) => n + value, 0).toFixed(2)  
  } else if (kategori === 'Faktor Kepemilikan') {
    form.faktorKepemilikan ? form.valueFaktorKepemilikan = form.faktorKepemilikan.value : form.valueFaktorKepemilikan = 0
  } else if (kategori === 'Indeks Kegiatan') {
    console.log(formIndeksKegiatan.indeksKegiatan)
    formIndeksKegiatan.indeksKegiatan ? formIndeksKegiatan.valueIndeksKegiatan = formIndeksKegiatan.indeksKegiatan.value : formIndeksKegiatan.valueIndeksKegiatan = 0
  }
  updatePerhitungan()
}

const updateIndeksTerintegrasi = () => {
  form.indeksTerintegrasi = (form.valueFungsiBangunan * form.valueClassification * form.valueFaktorKepemilikan).toFixed(2)
}

const updateJumlahLuasBangunan = () => {
  formIndeksKegiatan.jumlah = (form.indeksTerintegrasi * formIndeksKegiatan.luasBangunan * (formIndeksKegiatan.indeksLokalitas/100) * formIndeksKegiatan.valueIndeksKegiatan * formIndeksKegiatan.shst).toFixed(2)
}

const updateNilaiRetribusiPrasarana = (indexPrasarana, index) => {
  dataPrasarana[indexPrasarana].data[index].nilaiRetribusi = dataPrasarana[indexPrasarana].data[index].hspbg * dataPrasarana[indexPrasarana].data[index].luasPrasarana
  form.jumlahRetribusiPrasarana = dataPrasarana.reduce((total, prasarana) => {
    return total + prasarana.data.reduce((subtotal, item) => {
      return subtotal + item.nilaiRetribusi;
    }, 0);
  }, 0);
  updateJumlahRetribusiSeluruhnya()
}

const updateJumlahRetribusiSeluruhnya = () => {
  form.jumlahRetribusiSeluruhnya = parseFloat(formIndeksKegiatan.jumlah) + form.jumlahRetribusiPrasarana
}

const updatePerhitungan = () => {
  updateIndeksTerintegrasi()
  updateJumlahLuasBangunan()
  updateJumlahRetribusiSeluruhnya()
}
</script>