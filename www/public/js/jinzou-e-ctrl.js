

var JzCalc = {
	/**
     * BMI計算
	 * @param {number} height 身長(cm)
	 * @param {number} weight 体重(kg)
	 * @return {number} BMI値。計算不能な場合はNaN
     */
	calc_Bmi: function(height,weight) {
		var h = parseFloat(height) ;
		var w = parseFloat(weight) ;
		if (isNaN(h) || isNaN(w)) {
			return NaN ;
		}
		try {
			var hm = h / 100.0 ; // m単位に変換
			var bmi = w / (hm * hm) ;
			// 小数点以下1桁で丸める
			return Math.round(bmi * 10.0) / 10.0 ;
		} catch (e) {
			console.error(e) ;
			return NaN ;
		}
	} ,

	/**
     * 理想体重計算
	 * @param {number} height 身長(cm)
	 * @return {number} 理想体重値。計算不能な場合はNaN
     */
	calc_BestWeight: function(height) {
		var h = parseFloat(height) ;
		if (isNaN(h)) {
			return NaN ;
		}
		try {
			var hm = h / 100.0 ; // m単位に変換
			var bw = (22.0 * (h * h)) / 10000 ;
			return Math.round(bw) ;
		} catch (e) {
			console.error(e) ;
			return NaN ;
		}
	} ,

	/**
	 * eGFR計算
	 *
	 * @param {number} cr Crの検査結果
	 * @param {number} age 年齢
	 * @param {boolean} sex 性別(true:男/false:女)
	 * @return {number} eGFR値。計算不能な場合はNaN
	 */
	calc_eGFR: function(cr,age,sex) {
		var crv = parseFloat(cr) ;
		var agev = parseInt(age) ;
		if (isNaN(crv) || isNaN(agev)) {
			return NaN ;
		}
		try {
			var v = 194.0 * Math.pow(crv,-1.094) * Math.pow(agev,-0.287) ;
			if (!sex) {
				v *= 0.739 ;
			}
			return Math.round(v*10)/10.0 ;
		} catch(e) {
			console.error(e) ;
			return NaN ;
		}
	} ,

	/**
	 * eGFRのステージ算出
	 * @param {number} egfr eGFR値
	 * @return {string} ステージ
	 */
	calc_eGFR_Stage: function(egfr) {
		var stage ;
		if (egfr < 15) {
			stage = "5" ;
		} else if (egfr < 30) {
			stage = "4" ;
		} else if (egfr < 45) {
			stage = "3b" ;
		} else if (egfr < 60) {
			stage = "3a" ;
		} else if (egfr < 90) {
			stage = "2" ;
		} else {
			stage = "1" ;
		}
		return stage ;
	} ,

	/**
	 * 適切なエネルギー量を求める
	 * @param {number} height 身長
	 * @param {string} katudo 活動量 (やや低い|適度|高い)
	 * @return {Array} [下限,上限]。計算不能な場合はnull
	 */
	calc_Energy: function(height,katudo) {
		var heightV = parseFloat(height) ;
		if (isNaN(heightV)) {
			return null ;
		}
		var pl , ph ;
		switch (katudo) {
		case 'やや低い':
			pl = 25 ;
			ph = 30 ;
			break ;
		case '適度':
			pl = 30 ;
			ph = 35 ;
			break ;
		case '高い':
			pl = 35 ;
			ph = 40 ;
			break ;
		default:
			return null ;
		}
		try {
			var l = Math.pow(heightV/100.0,2) * 22 * pl ;
			var h = Math.pow(heightV/100.0,2) * 22 * ph ;
			return [Math.round(l),Math.round(h)] ;
		} catch (e) {
			console.error(e) ;
			return null ;
		}
	},


	__eof_ : null 
} ;
