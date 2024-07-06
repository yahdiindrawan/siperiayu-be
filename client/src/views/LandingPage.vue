<template>
  <div class="">
    <!-- Hero Section -->
     <section class="mt-6">
      <div class="max-w-7xl mx-auto py-4 lg:py-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-4 content-center">
          <div class="p-4 order-last lg:order-first">
            <img src="@/assets/illustrations/hero.svg" alt="Hero Illustration" class="w-full max-w-2xl mx-auto">
          </div>
          <div class="flex items-center">
            <div class="p-8 space-y-4 lg:space-y-6 max-w-2xl mx-auto">
              <img src="@/assets/logos/calculator-pbg.svg" alt="" class="h-10 md:h-12">
              <h4 class="text-2xl md:text-3xl uppercase font-bold">
                Simulasi Perhitungan <br>
                Retribusi PBG <br>
                KABUPATEN Indramayu
              </h4>
              <p class="text-sm md:text-base">Simulasi perhitungan retribusi Persetujuan Bangunan Gedung (PBG) untuk Bangunan Baru/Renovasi, membantu anda dalam menghitung perkiraan pembayaran retribusi PBG.</p>
              <div>
                <router-link to="#kalkulator" class="bg-secondary text-white px-6 py-2 rounded-xl text-base md:text-lg shadow-lg hover:shadow-2xl hover:opacity-90">Mulai Hitung</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="max-w-screen mt-8">
          <img src="@/assets/icons/building.gif" alt="Animation" class="bg-cover w-full">
      </div>
     </section>
     <TheCalculator/>
     <!-- Section Kalkulator -->
      <!-- <section id="kalkulator" class="bg-beige">
        <div class="max-w-7xl mx-auto py-12">
          <div class="flex">
            <h2 class="text-primary font-bold text-3xl flex">
              <p class="underline underline-offset-8 decoration-black">K</p>
              alkulator PBG
            </h2>
          </div>
          <p class="pt-2">Simulasi perhitungan retribusi PBG</p>
          <div class="space-y-8 py-4">
            
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
                      <select id="location" name="location" class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-gray-600 sm:text-sm sm:leading-6">
                        <option selected="">- Pilih Fungsi Bangunan -</option>
                        <option >Keagamaan</option>
                        <option>Usaha</option>
                      </select>
                    </td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">0</td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">0</td>
                  </tr>
                  <tr>
                    <th scope="col" class="px-3 uppercase border-2 border-gray-200 py-3.5 text-center text-sm font-semibold text-gray-900">No</th>
                    <th scope="col" class="px-3 uppercase border-2 border-gray-200 py-3.5 text-center text-sm font-semibold text-gray-900">Klasifikasi</th>
                    <th scope="col" class="px-3 uppercase border-2 border-gray-200 py-3.5 text-center text-sm font-semibold text-gray-900">Bobot</th>
                    <th scope="col" class="px-3 uppercase border-2 border-gray-200 py-3.5 text-center text-sm font-semibold text-gray-900">Parameter</th>
                    <th scope="col" class="px-3 uppercase border-2 border-gray-200 py-3.5 text-center text-sm font-semibold text-gray-900">Indeks</th>
                    <th scope="col" class="px-3 uppercase border-2 border-gray-200 py-3.5 text-center text-sm font-semibold text-gray-900">Nilai (B)</th>
                  </tr>
                  <tr>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">1.</td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">Kompleksitas</td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">0.3</td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">
                      <select id="location" name="location" class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-gray-600 sm:text-sm sm:leading-6">
                        <option selected="">- Pilih Kompleksitas -</option>
                      </select>
                    </td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">0</td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">0</td>
                  </tr>
                  <tr>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">2.</td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">Permanensi</td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">0.2</td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">
                      <select id="location" name="location" class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-gray-600 sm:text-sm sm:leading-6">
                        <option selected="">- Pilih Permanensi -</option>
                      </select>
                    </td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">0</td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">0</td>
                  </tr>
                  <tr>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">3.</td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">Ketinggian</td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">0.5</td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">
                      <select id="location" name="location" class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-gray-600 sm:text-sm sm:leading-6">
                        <option selected="">- Pilih Ketinggian -</option>
                      </select>
                    </td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">0</td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">0</td>
                  </tr>

                  <tr>
                    <th colspan="5" scope="col" class="px-8 uppercase border-2 border-gray-200 py-3.5 text-right text-sm font-semibold text-gray-900">Jumlah (B)</th>
                    <th scope="col" class="px-3 border-2 border-gray-200 py-3.5 text-center text-sm text-gray-900">0</th>
                  </tr>
                  <tr>
                    <td colspan="3" rowspan="2" scope="col" class="uppercase border-2 border-gray-200 py-3.5 pl-4 pr-3 text-center text-sm font-semibold text-gray-900 sm:pl-0"></td>
                    <th scope="col" class="px-3 uppercase border-2 border-gray-200 py-3.5 text-center text-sm font-semibold text-gray-900">Faktor Kepemilikan</th>
                    <th scope="col" class="px-3 uppercase border-2 border-gray-200 py-3.5 text-center text-sm font-semibold text-gray-900">Indeks</th>
                    <th scope="col" class="px-3 uppercase border-2 border-gray-200 py-3.5 text-center text-sm font-semibold text-gray-900">Nilai (C)</th>
                  </tr>
                  <tr>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">
                      <select id="location" name="location" class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-gray-600 sm:text-sm sm:leading-6">
                        <option selected="">- Pilih Faktor Kepemilikan -</option>
                      </select>
                    </td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">0</td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">0</td>
                  </tr>
                  <tr>
                    <th colspan="5" scope="col" class="px-8 border-2 border-gray-200 py-3.5 text-right text-sm font-semibold text-gray-900">Indeks Terintegrasi (IT) = A x B x C</th>
                    <th scope="col" class="px-3 border-2 border-gray-200 py-3.5 text-center text-sm text-gray-900">0</th>
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
                    <th scope="col" class="px-3 uppercase border-2 border-gray-200 py-3.5 text-center text-sm font-semibold text-gray-900">SHSHT</th>
                    <th scope="col" class="px-3 uppercase border-2 border-gray-200 py-3.5 text-center text-sm font-semibold text-gray-900">Jumlah</th>
                  </tr>
                  <tr>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">
                      <div class="mt-2 flex rounded-md shadow-sm">
                        <input type="text" name="company-website" id="company-website" class="block w-full px-4 min-w-0 flex-1 rounded-none rounded-l-3xl border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" placeholder="" />
                        <span class="inline-flex bg-gray-200 items-center rounded-r-3xl border border-l-0 border-gray-300 px-3 text-gray-500 sm:text-sm">M <sup>2</sup></span>
                      </div>
                    </td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">0.5 %</td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">
                      <select id="location" name="location" class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-gray-600 sm:text-sm sm:leading-6">
                        <option selected="">- Pilih Indeks Kegiatan -</option>
                      </select>
                    </td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">
                      <div class="flex justify-between">
                        <p>Rp.</p>
                        <p>5.350.000,00</p>
                      </div>
                    </td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">
                      <div class="flex justify-between">
                        <p>Rp.</p>
                        <p>0,00</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th colspan="4" scope="col" class="px-8 border-2 border-gray-200 py-3.5 text-right text-sm font-semibold text-gray-900">Jumlah Retribusi Bangunan Gedung</th>
                    <th scope="col" class="px-3 uppercase border-2 border-gray-200 py-3.5 text-center text-sm font-semibold text-gray-900">
                      <div class="flex justify-between">
                        <p>Rp.</p>
                        <p>0,00</p>
                      </div>
                    </th>
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
                  <tr>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">1.</td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-left text-sm text-gray-900">Konstruksi pembatas/ penahan/pengaman</td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-left text-sm text-gray-900">Pagar</td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">M</td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">
                      <div class="flex justify-between">
                        <p>Rp.</p>
                        <p>25.200,00</p>
                      </div>
                    </td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">
                      <div class="mt-2 flex rounded-md shadow-sm">
                        <input type="text" name="company-website" id="company-website" class="block w-full px-4 min-w-0 flex-1 rounded-none rounded-l-3xl border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" placeholder="" />
                        <span class="inline-flex bg-gray-200 items-center rounded-r-3xl border border-l-0 border-gray-300 px-3 text-gray-500 sm:text-sm">M <sup>2</sup></span>
                      </div>
                    </td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">
                      <div class="flex justify-between">
                        <p>Rp.</p>
                        <p>0,00</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">2.</td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-left text-sm text-gray-900">Konstruksi perkerasan aspal, beton</td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-left text-sm text-gray-900"></td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">M <sup>2</sup></td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">
                      <div class="flex justify-between">
                        <p>Rp.</p>
                        <p>2.300,00</p>
                      </div>
                    </td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">
                      <div class="mt-2 flex rounded-md shadow-sm">
                        <input type="text" name="company-website" id="company-website" class="block w-full px-4 min-w-0 flex-1 rounded-none rounded-l-3xl border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" placeholder="" />
                        <span class="inline-flex bg-gray-200 items-center rounded-r-3xl border border-l-0 border-gray-300 px-3 text-gray-500 sm:text-sm">M <sup>2</sup></span>
                      </div>
                    </td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">
                      <div class="flex justify-between">
                        <p>Rp.</p>
                        <p>0,00</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td rowspan="2" scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">3.</td>
                    <td rowspan="2" scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-left text-sm text-gray-900">Konstruksi reklame/ papan nama</td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-left text-sm text-gray-900">Billboard papan iklan</td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-left text-sm text-gray-900">Unit dan penambahannya <br> (Luas maksimum 12 m. Apabila ada penambahan luas unit, dikenakan biaya tambahan Rp 500.000,00/m )</td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">
                      <div class="flex justify-between">
                        <p>Rp.</p>
                        <p>6.600.000,00</p>
                      </div>
                    </td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">
                      <div class="mt-2 flex rounded-md shadow-sm">
                        <input type="text" name="company-website" id="company-website" class="block w-full px-4 min-w-0 flex-1 rounded-none rounded-l-3xl border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" placeholder="" />
                        <span class="inline-flex bg-gray-200 items-center rounded-r-3xl border border-l-0 border-gray-300 px-3 text-gray-500 sm:text-sm">Unit</span>
                      </div>
                    </td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">
                      <div class="flex justify-between">
                        <p>Rp.</p>
                        <p>0,00</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-left text-sm text-gray-900">Papan nama (berdiri sendiri atau berupa tembok pagar)</td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-left text-sm text-gray-900">Unit dan penambahannya <br> (Luas maksimum 2 m . Apabila ada penambahan luas unit, dikenakan biaya tambahan Rp 150.000,00/m )</td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">
                      <div class="flex justify-between">
                        <p>Rp.</p>
                        <p>306.000,00</p>
                      </div>
                    </td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">
                      <div class="mt-2 flex rounded-md shadow-sm">
                        <input type="text" name="company-website" id="company-website" class="block w-full px-4 min-w-0 flex-1 rounded-none rounded-l-3xl border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" placeholder="" />
                        <span class="inline-flex bg-gray-200 items-center rounded-r-3xl border border-l-0 border-gray-300 px-3 text-gray-500 sm:text-sm">Unit</span>
                      </div>
                    </td>
                    <td scope="col" class="px-3 border-2 border-gray-200 py-2.5 text-center text-sm text-gray-900">
                      <div class="flex justify-between">
                        <p>Rp.</p>
                        <p>0,00</p>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th colspan="6" scope="col" class="px-8 border-2 border-gray-200 py-3.5 text-right text-sm font-semibold text-gray-900">Jumlah Retribusi Prasarana Bangunan Gedung</th>
                    <th scope="col" class="px-3 uppercase border-2 border-gray-200 py-3.5 text-center text-sm font-semibold text-gray-900">
                      <div class="flex justify-between">
                        <p>Rp.</p>
                        <p>0,00</p>
                      </div>
                    </th>
                  </tr>
                </table>
              </div>
            </div>

          </div>
        </div>
      </section> -->
  </div>
</template>

<script>
import TheCalculator from '@/components/partials/Kalkulator.vue'
export default {
  components: {
    TheCalculator
  }
}
</script>