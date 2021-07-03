<template>
  <div class="form-section">
    <div class="container">
      <!-- 現在ページの表示 -->
      <div class="current-num">
        <div class="num-circle" :class="checkCurrentPage(1)">
          {{ checkCurrentPage(1)['passed-page'] ? "✔︎" : 1 }}
        </div>
        <div class="num-circle" :class="checkCurrentPage(2)">
          {{ checkCurrentPage(2)['passed-page'] ? "✔︎" : 2 }}
        </div>
        <div class="num-circle" :class="checkCurrentPage(3)">
          {{ checkCurrentPage(3)['passed-page'] ? "✔︎" : 3 }}
        </div>
        <div class="num-circle" :class="checkCurrentPage(4)">
          {{ checkCurrentPage(4)['passed-page'] ? "✔︎" : 4 }}
        </div>
      </div>
      <!-- １ページ目のコンテンツの表示 -->
      <div class="contact-form" v-show="currentPage === 1">
        <div class="select">
          <h3 class="contact-title">
            ご相談内容をお選びください
            <span class="optional">任意</span>
          </h3>
          <p class="mt20"><span class="t12"><i class="fas fa-asterisk tblue fa-fw"></i>複数選択可能</span></p>
          <div class="selects sepa2">
            <label for="select-1" class="select-button" :class="selected(selectBox.homepage)">サイト制作</label>
            <input id="select-1" type="checkbox" name='select-1' v-model="selectBox.homepage">
            <label for="select-2" class="select-button" :class="selected(selectBox.system)">システム開発</label>
            <input id="select-2" type="checkbox" name='select-2' v-model="selectBox.system">
            <label for="select-3" class="select-button" :class="selected(selectBox.consul)">WEBコンサル</label>
            <input id="select-3" type="checkbox" name='select-3' v-model="selectBox.consul">
          </div>
        </div>
        <div class="btn_wrap">
          <button class="b-next" @click="nextCurrentPage()">次へ</button>
        </div>
      </div>
      <!-- ２ページ目のコンテンツの表示 -->
      <div class="contact-form" v-show="currentPage === 2">
        <div class="select">
          <h3 class="contact-title">
              ご相談したい内容を以下にご記入ください
              <span class="optional">任意</span>
          </h3>
          <p class="t12 mt20">ご記入内容はお打ち合わせの際に参考にさせていただきます。</p>
          <textarea class='mt20' cols="100" rows="8" maxlength="1000" name='contactDetail' v-model="contactDetail" placeholder="ホームページを新しく作成したなど。ご自由にご記入ください"></textarea>
        </div>
        <div class="btn_wrap">
          <button class="b-back" @click="prevCurrentPage()">戻る</button>
          <button class="b-next" @click="nextCurrentPage()">次へ</button>
        </div>
      </div>
      <!-- ３ページ目のコンテンツの表示 -->
      <div class="contact-form" v-show="currentPage === 3">
      <div class="select">
        <h3 class="contact-title">
            相談されたい希望日をご記入ください
            <span class="optional">任意</span>
        </h3>
        <p class="t12 mt20"><i class="fas fa-asterisk tblue fa-fw"></i>いつでも良い方は下記の「次へ」を押してください</p>
        <h4>曜日から選ぶ(複数回選択可)</h4>
        <div class="selects sepa3">
          <label for="week-select-1" class="select-button" :class="weekSelected(selectWeek.monday)">月曜</label>
          <input id="week-select-1" type="checkbox" name='week-select-1' v-model="selectWeek.monday">
          <label for="week-select-2" class="select-button" :class="weekSelected(selectWeek.tuesday)">火曜</label>
          <input id="week-select-2" type="checkbox" name='week-select-2' v-model="selectWeek.tuesday">
          <label for="week-select-3" class="select-button" :class="weekSelected(selectWeek.wednesday)">水曜</label>
          <input id="week-select-3" type="checkbox" name='week-select-3' v-model="selectWeek.wednesday">
          <label for="week-select-4" class="select-button" :class="weekSelected(selectWeek.thursday)">木曜</label>
          <input id="week-select-4" type="checkbox" name='week-select-4' v-model="selectWeek.thursday">
          <label for="week-select-5" class="select-button" :class="weekSelected(selectWeek.friday)">金曜</label>
          <input id="week-select-5" type="checkbox" name='week-select-5' v-model="selectWeek.friday">
        </div>

        <div class=" select-timezone">
            <h4>時間帯から選ぶ(いずれか１つを選択)</h4>
            <div class="selects sepa3">
              <input id="timezone-select-1" type="radio" name='timezone-select-1' v-model="timezone" value="午前">
              <label for="timezone-select-1" class="select-button" :class="timezoneSelected('午前')">
                  午前
              </label>
              <input id="timezone-select-2" type="radio" name='timezone-select-2' v-model="timezone" value="午後">
              <label for="timezone-select-2" class="select-button" :class="timezoneSelected('午後')">
                  午後
              </label>
              <input id="timezone-select-3" type="radio" name='timezone-select-3' v-model="timezone" value="いつでも">
              <label for="timezone-select-3" class="select-button" :class="timezoneSelected('いつでも')">
                  いつでも
              </label>
            </div>
        </div>
        <div class="select-day mt20">
            <h4>希望日程を選ぶ</h4>
            <input class='mt10 pointer' type="date" name='date' v-model="date">
        </div>
      </div>
        <div class="btn_wrap">
          <button class="b-back" @click="prevCurrentPage()">戻る</button>
          <button class="b-next" @click="nextCurrentPage()">次へ</button>
        </div>
      </div>
      <!-- ４ページ目のコンテンツの表示 -->
      <div class="contact-form" v-show="currentPage === 4">
      <div class="select">
        <h3 class="contact-title">
            お名前とメールアドレスを教えて下さい<span class="required">必須</span>
        </h3>

        <section class="mt20 w80">
            <!-- 名前 -->
            <p class=""><i class="fas fa-caret-right fa-fw"></i>名前</p>
            <div data-field="名前" data-validate="required">
              <input type="text" autocomplete="name" name='name' class="w100" v-model="customer.name" />
            </div>

            <!-- メールアドレス -->
            <p class=""><i class="fas fa-caret-right fa-fw"></i>メールアドレス</p>
            <div data-field="メールアドレス" data-validate="email">
                <input type="email" inputmode="email" name='email' autocapitalize="off" class="w100" v-model="customer.mail" />
            </div>
        </section>
      </div>

      <div class='error_msg' v-show="error_name">【お名前】必須項目です。入力内容をご確認ください。</div>
      <div class='error_msg' v-show="error_mail_require">【メールアドレス】必須項目です。入力内容をご確認ください。</div>
      <div class='error_msg' v-show="error_mail_format">【メールアドレス】フォーマットが不正です。入力内容をご確認ください。</div>

      <div class="btn_wrap">
        <button class="b-back" @click="prevCurrentPage()"><span><i class="fas fa-chevron-left"></i></span>戻る</button>
        <div v-if="disabledNext" class="b-disable" @click="displayError()">次へ<span><i class="fas fa-chevron-right"></i></span></div>
        <button v-else class="b-next" @click="nextCurrentPage()">次へ<span><i class="fas fa-chevron-right"></i></span></button>
      </div>
      </div>
      <!-- 送信完了ページの表示 -->
      <div class="contact-form"  v-show="currentPage === 5">
        <p>送信しました</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, watch } from 'vue'
export default {
  setup () {
    // 現在のページ管理
    let currentPage = ref(1)
    const checkCurrentPage = number => {
      return {
        'current-page': currentPage.value === number,
        'passed-page': currentPage.value > number
      }
    }
    const nextCurrentPage = () => currentPage.value++
    const prevCurrentPage = () => currentPage.value--

    /* １ページ目のデータ管理 */
    let selectBox = reactive({
      homepage: false,
      system: false,
      consul: false,
    })
    const selected = selected => {
      return { 'selected': selected }
    }

    /* ２ページ目のデータ管理 */
    let contactDetail = ref(null)

    /* ３ページ目のデータ管理 */
    let selectWeek = reactive({
        sunday: false,
        monday: false,
        tuesday: false,
        wednesday: false,
        thursday: false,
        friday: false,
    })
    let timezone = ref('いつでも')
    let date = ref(null)
    const weekSelected = radioValue => {
      return { 'selected': radioValue }
    }
    const timezoneSelected = radioValue => {
      return { 'selected': timezone.value === radioValue }
    }

    /* ４ページ目のデータ管理 */
    let customer = reactive({
        name: '',
        mail: '',
    })
    let disabledNext = ref(true)
    let error_name = ref(false)
    let error_mail_require = ref(false)
    let error_mail_format = ref(false)
    const checkDisabledNext = () => {
      // 入力チェックを行い、次へボタンを切り替える
      if (customer.name === '' || customer.mail === ''
          || !checkEmail(customer.mail)) {
        disabledNext.value = true
      } else {
        disabledNext.value = false
      }
    }
    const checkEmail = mail => {
      // 正規表現を使って xxx@xxx.xxxx のようなフォーマットになっているかをチェック
      const emailReg = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/
      return emailReg.test(mail)
    }
    const displayError = () => {
      if (customer.name === '') {
        error_name.value = true
      }
      if (customer.mail === '') {
        error_mail_require.value = true
      } else if (!checkEmail(customer.mail)) {
        error_mail_format.value = true
      }
    }
    watch(
      () => customer,
      () => {
        checkDisabledNext()
        error_name.value = false
        error_mail_require.value = false
        error_mail_format.value = false
      },
      { deep: true }
    )

    return {
      currentPage, checkCurrentPage, nextCurrentPage, prevCurrentPage,
      selectBox, selected, contactDetail, selectWeek, timezone, date,
      weekSelected, timezoneSelected, customer, disabledNext, checkDisabledNext,
      checkEmail, error_name, error_mail_require, error_mail_format, displayError
    }
  }
}
</script>

<style scoped>
.w80{
  width: 80%;
}
.w100{
  width: 100%;
}
.current-num {
  padding-top: 3rem;
  padding-bottom: 2rem;
  display: flex;
  justify-content: space-between;
}
.current-num .num-circle {
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 3px solid #ddd;
  border-radius: 15px;
  background: #ffffff;
  text-align: center;
  line-height: 26px;
  color: #bbb;
  font-weight: bold;
}
.current-num .current-page {
  border: 3px solid #35495e;
  color: #35495e;
}
.current-num .passed-page {
  background-color: #41b883;
  border: 3px solid #41b883;
  color: #fff;
}
.contact-form{
  border: 2px solid #41b883;
  border-radius: 5px;
  -moz-box-shadow: 0px 0px 13px 5px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 0px 13px 5px rgba(0, 0, 0, 0.1);
  -ms-box-shadow: 0px 0px 13px 5px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 13px 5px rgba(0, 0, 0, 0.1);
}
.contact-form .select{
  width: 90%;
  margin: auto;
  position: relative;
}
.contact-form .select h3{
  width: 70%;
  border-left: 5px solid #41b883;
  margin: 1rem 0 0 0;
  padding: .5em 0 .5em .5em;
  color: #0e271c;
}
.contact-form .select h3 span{
  font-size: 14px;
  font-size: 1.4rem;
  font-weight: 400;
}
.contact-form .select .optional{
  position: absolute;
  top: .5em;
  right: 0;
  width: 20%;
  background: #7a7f7d;
  padding: .2em 0 .2em 0;
  border-radius: 5px;
  color: #fefefe;
  text-align: center;
}
.contact-form .select .required{
  position: absolute;
  top: .5em;
  right: 0;
  width: 20%;
  background: #b84841;
  padding: .2em 0 .2em 0;
  border-radius: 5px;
  color: #fefefe;
  text-align: center;
}

.contact-form.send{
  padding: 10px;
}
.contact-form.send p{
  text-align: center;
}

.selects{
  margin-top: 10px;
  display: grid;
  grid-template-columns: repeat(1,1fr);
  grid-gap: 8px 12px;
  position: relative;
}
.selects .select-button {
  width: 100%;
  display: inline-block;
  background-color: #fff;
  padding: .55em 0;
  border: 2px solid #ccc;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
}
.selects .select-button.selected{
  color: #fff;
  background: #41b883;
}
.selects.sepa2 {
  grid-template-columns: repeat(2,1fr);
}
.selects.sepa3 {
  grid-template-columns: repeat(3,1fr);
}
.select input[type=checkbox],
.select input[type=radio] { display: none; }
.select-day input{
  text-align: center;
  display: block;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}
.select h4{
  background: #ecf8f3;
  font-size: 14px;
  font-size: 1.4rem;
  text-align: center;
  padding: 0.3rem;
}
.select section{
  margin-left: auto;
  margin-right: auto;
}
textarea{
  width: 100%;
}
.btn_wrap{
  text-align: center;
  padding-top: 1.3rem;
  padding-bottom: 1.3rem;
}
.btn_wrap .b-back{
  height: 40px;
  padding: 0 30px;
  font-size: 16px;
  font-size: 1.6rem;
  line-height: 30px;
  color: #35495e;
}
.btn_wrap .b-disable{
  display: inline;
  background: #e0e6ed;
  height: 40px;
  border-radius: 14px;
  padding: 0 30px;
  padding-top: 1.3rem;
  padding-bottom: 1.3rem;
  font-size: 16px;
  font-size: 1.6rem;
  line-height: 30px;
  color: #35495e;
}
.btn_wrap .b-next{
  background: #35495e;
  height: 40px;
  border-radius: 14px;
  padding: 0 30px;
  font-size: 16px;
  font-size: 1.6rem;
  line-height: 30px;
  color: #fff;
}
.error_msg{
  width: 80%;
  margin: 20px auto 0;
  text-align: center;
  padding: 10px 0;
  border: #b84841 solid 1px;
}
</style>
