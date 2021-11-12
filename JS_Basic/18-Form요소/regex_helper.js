/** 
 * @filename   : regex_helper.js
 * @author : 최 진 (choij2494@gmail.com)
 * @description : 정규표현식 검사 수행 후, true/false로 해당 정규표현식이 충족하는지 
 * 여부를 반환하는 함수들의 모음
*/

class RegexHelper {
    // constructor(){}

    /** 
     * 값의 존재 여부를 검사한다.
     *  @param  {string} selector    입력요소에 해당하는 CSS선택자
     *  @param  {string} msg         값이 없을 경우 표시할 메세지 내용
     *  @return {boolean}            입력된 경우 true / 입력되지 않은 경우 false
    */
    value(selector, msg) {
    }

    /** 
     *  입력값이 지정된 글자수를 초과했는지 검사한다.
     *  @param  {string} selector    입력요소에 해당하는 CSS선택자
     *  @param  {int} len            최대 글자수
     *  @param  {string} msg         값이 없을경우 표시될 메세지
     *  @return {boolean}            초과하지 않은 경우 true / 초과한 경우 false
    */
    max_length(selector, len, msg) {
    }
    
    /** 
     *  입력값이 지정된 글자수 미만인지 검사한다.
     *  @param  {string} selector    입력요소에 해당하는 CSS선택자
     *  @param  {int} len            최대 글자수
     *  @param  {string} msg         값이 없을 경우 표시될 메시지
     *  @return {boolean}            지정된 글자수 이상인 경우 true / 미만인 경우 false
    */
    min_length(selector, len, msg) {
    }

    /** 
     *  체크박스나 라디오가 선택되어 있는지 검사한다.
     *  @param  {string} selector    입력요소에 해당하는 CSS선택자
     *  @param  {string} msg         값이 없을 경우 표시될 메시지
     *  @return {boolean}            체크 된 경우 true / 체크되지 않은 경우 false
    */
    check(selector, msg) {
    }

    /** 
     *  체크박스나 라디오의 최소 선택 갯수를 검사한다.
     *  @param {string} selector    입력요소에 해당하는 CSS선택자
     *  @param {int} min            최소 선택 갯수
     *  @param {string} msg         검사에 실패할 경우 표시될 메시지
     *  @return {boolean}           최소 수량 이상인 경우 true / 그렇지 않은 경우 false
    */
    check_min(selector, min, msg) {
    }

    /** 
     *  체크박스나 라디오의 최대 선택 갯수를 검사한다.
     *  @param  {string} selector    입력요소에 해당하는 CSS선택자
     *  @param  {int} max            최대 선택 갯수
     *  @param  {string} msg         검사에 실패한 경우 표시할 메시지
     *  @return {boolean}            최대 수량 이하인 경우 true / 그렇지 않은 경우 false
    */
    check_max(selector, max, msg) {
    }

    /** 
     *  두 요소의 입력값이 동일한지 검사한다.
     *  @param  {string} origin_selector     원본요소의 selector
     *  @param  {string} compare_selector    검사 대상 요소의 selector
     *  @param  {string} msg                 검사에 실패한 경우 표시할 메시지
     *  @return {boolean}                    동일한 경우 true / 다른 경우 false
    */
    compare_to(origin_selector, compare_selector, msg) {
    }

    /** 
     *  입력값이 정규표현식을 충족하는지 검사한다.
     *  @param  {string} selector            입력요소에 해당하는 CSS선택자
     *  @param  {string} msg                 표시할 메세지
     *  @param  {object} regex_expr          검사할 정규표현식
     *  @return {boolean}                    표현식을 충족할 경우 true / 그렇지 않을 경우 false
    */
    filed(selector, msg, regex_expr) {
    }

    /** 
     *  숫자로만 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출한다.
     *  @param  {string} selector            입력요소에 해당하는 CSS선택자
     *  @param  {string} msg                 표시할 메세지
     *  @return {boolean}                    표현식을 충족할 경우 true / 그렇지 않을 경우 false
    */
    num(selector, msg) {
    }

    /** 
     *  영어로만 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출한다.
     *  @param {string} selector            입력요소에 해당하는 CSS선택자
     *  @param {string} msg                 표시할 메세지
     *  @return {boolean}                   표현식을 충족할 경우 true / 그렇지 않을 경우 false
    */
    eng(selector, msg) {
    }

    /** 
     *  한글로만 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출한다.
     *  @param  {string} selector            입력요소에 해당하는 CSS선택자
     *  @param  {string} msg                 표시할 메세지
     *  @return {boolean}                    표현식을 충족할 경우 true / 그렇지 않을 경우 false
    */
    kor(selector, msg) {
    }

    /** 
     *  영문과 숫자로만 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출한다.
     *  @param  {string} selector            입력요소에 해당하는 CSS선택자
     *  @param  {string} msg                 표시할 메세지
     *  @return {boolean}                    표현식을 충족할 경우 true / 그렇지 않을 경우 false
    */
    eng_num(selector, msg) {
    }

    /** 
     *  한글과 숫자로만 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출한다.
     *  @param  {string} selector            입력요소에 해당하는 CSS선택자
     *  @param  {string} msg                 표시할 메세지
     *  @return {boolean}                    표현식을 충족할 경우 true / 그렇지 않을 경우 false
    */
    kor_num(selector, msg) {
    }

    /** 
     *  이메일 주소형식으로 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출한다.
     *  @param  {string} selector            입력요소에 해당하는 CSS선택자
     *  @param  {string} msg                 표시할 메세지
     *  @return {boolean}                    표현식을 충족할 경우 true / 그렇지 않을 경우 false
    */
    email(selector, msg) {
    }

    /** 
     *  핸드폰 번호형식으로 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출한다.
     *  @param {string} selector            입력요소에 해당하는 CSS선택자
     *  @param {string} msg                 표시할 메세지
     *  @return {boolean}                   표현식을 충족할 경우 true / 그렇지 않을 경우 false
    */
    cellphone(selector, msg) {
    }

    /** 
     *  집전화 번호형식으로 이루어 졌는지 검사하기 위해 field()를 간접적으로 호출한다.
     *  @param  {string} selector            입력요소에 해당하는 CSS선택자
     *  @param  {string} msg                 표시할 메세지
     *  @return {boolean}                    표현식을 충족할 경우 true / 그렇지 않을 경우 false
    */
    telphone(selector, msg) {
    }

    /** 
     *  핸드폰번호 형식과 집 전화 번호 형식중 둘 중 하나를 충족하는지 
     *  검사하기 위해 field()를 간접적으로 호출한다.
     *  @param  {string} selector            입력요소에 해당하는 CSS선택자
     *  @param  {string} msg                 표시할 메세지
     *  @return {boolean}                    표현식을 충족할 경우 true / 그렇지 않을 경우 false
    */
    phone(selector, msg) {
    }
}