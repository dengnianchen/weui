module.exports = Behavior({
	behaviors: [],
	properties: {
		name: { // 控件名称（作为表单收集数据时的标识符）
			type: String,
			value: '',
		},
		label: { // 标签
			type: String,
			value: '',
		},
		initValue: { // 控件的初始值，作为之后判断控件值是否发生变化的依据
			type: null,
			value: null,
			observer(newVal) {
				this.setData({ value: newVal });
			},
		},
		value: { // 控件的当前值
			type: null,
			value: null,
			observer(newVal) {
				this.setData({
					_changed: newVal !== this.data.initValue,
					_error: false,
				});
			},
		},
		disabled: { // 控件是否为禁用状态
			type: Boolean,
			value: false,
		},
		excludeOnSubmit: { // 是否在表单提交时排除该控件字段
			type: Boolean,
			value: false,
		}
	},
	data: {
		_formDisabled: false,
		_changed: false,
		_error: false
	},
	methods: {
		
		/// Public Functions ///
		
		/**
		 * 获取控件的字段名
		 *
		 * @returns {string}
		 */
		name() {
			return this.data.name;
		},
		
		/**
		 * 获取控件当前的值
		 *
		 * @returns {*}
		 */
		value() {
			return this.data.value;
		},
		
		/**
		 * 设置控件的错误信息，false代表无错误。若未指定参数value，则该函数返回控件当前的错误信息
		 *
		 * @param value 错误信息
		 * @returns {boolean|string|undefined}
		 */
		error(value) {
			if (value === undefined)
				return this.data._error;
			this.setData({ _error: value });
		},
		
		/**
		 * 验证控件当前的值是否符合验证规则
		 *
		 * @returns {string} 验证结果，若不符合某条验证规则，则返回错误说明，否则返回空字串
		 */
		validate() {
			return '';
		}
		
	}
	
});