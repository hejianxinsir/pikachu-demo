
!function(){
	function writeCode(prefix,code,fn){
		let container = document.querySelector('#code')
		let styleTag = document.querySelector('#styleTag')
		let n = 0
		let id = setInterval(()=>{
			n += 1
			container.innerHTML = code.slice(0,n)
			styleTag.innerHTML = code.slice(0,n)
			container.scrollTop = container.scrollHeight

			if(n >= code.length){
				window.clearInterval(id)
				fn && fn.call()
			}
		},10)
	}

	

	let displayCode =`
	.preview{
		border: 1px solid gray; 
		height: 50vh;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #ffec00;
	}
	.wrapper{
		width: 100%;
		height: 165px;
		position: relative;
	}
	.nose{
		width: 22px;
		height: 22px;
		border: 12px solid transparent;
		border-radius: 50%;
		border-top-color: black;
		position: absolute;
		left: 50%;
		top: 22px;
		transform: translate(-50%);
	}
	.eye{
		position: absolute;
		width: 44px; height: 44px;
		background: #2e2e2e;
		border-radius: 50%;
	}
	.eye.left{
		left: 50%;
		margin-left: -104px;
	}
	.eye.right{
		right: 50%;
		margin-right: -104px;
	}
	.eyebow{
		width: 18px;
		height: 18px;
		border-radius: 9px;
		background: #fff;
	}
	.eyebow-left{
		position: absolute;
		left: 50%;
		top: 3px;
		margin-left: -96px;
	}
	.eyebow-right{
		position: absolute;
		right: 50%;
		top: 3px;
		margin-right: -87px;
	}
	.cheek{
		position: absolute;
		left: 50%;
		top: 77px;
		width: 62px;
		height: 62px;
		border-radius: 50%;
		background: #ff0000;
		border: 2px solid black;
	}
	.cheek-left{
		margin-left: -147px;
	}
	.cheek-right{
		margin-left: 85px;
	}
	.upperLip{
		position: absolute;
		top: 46px;
		width: 60px;
		height: 16px;
		border: 3px solid black;
		background: #ffec00;
	}
	.upperLip.lipLeft{
		border-bottom-left-radius: 42px 25px;
		border-top: none;
		border-right: none;
		transform: rotate(-20deg);
		right: 50%;
	}
	.upperLip.lipRight{
		border-bottom-right-radius: 42px 25px;
		border-top: none;
		border-left: none;
		transform: rotate(20deg);
		left: 50%;
	}

	.lowerLip-wrapper{
		position: absolute;
		bottom: 0px;
		left: 50%;
		margin-left: -48px;
		/* border: 1px solid red; */
		width: 100px;
		height: 114px;
		overflow: hidden;
	}
	.lowerLip{
		position: absolute;
		bottom: 0;
		width: 96px;
		height: 500px;
		border: 3px solid black;
		background: #a80000;  /* #ff0052 */
		border-radius: 200px/800px;
		overflow: hidden;
	}
	.lowerLip::before{
		position: absolute;
		bottom: -4px;
		left: 50%;
		margin-left: -48px;
		background: #ff0052;
		content: '';
		width: 96px;
		height: 85px;
		border: 1px solid red;
		border-radius: 50px/40px
	}`

	writeCode('',displayCode)

}.call()