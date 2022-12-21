	.text
	.def	@feat.00;
	.scl	3;
	.type	0;
	.endef
	.globl	@feat.00
.set @feat.00, 0
	.file	"main.8e379572-cgu.0"
	.def	_ZN3std10sys_common9backtrace28__rust_begin_short_backtrace17h4dfe358cfb2aa57eE;
	.scl	3;
	.type	32;
	.endef
	.section	.text,"xr",one_only,_ZN3std10sys_common9backtrace28__rust_begin_short_backtrace17h4dfe358cfb2aa57eE
	.p2align	4, 0x90
_ZN3std10sys_common9backtrace28__rust_begin_short_backtrace17h4dfe358cfb2aa57eE:
.seh_proc _ZN3std10sys_common9backtrace28__rust_begin_short_backtrace17h4dfe358cfb2aa57eE
	subq	$40, %rsp
	.seh_stackalloc 40
	.seh_endprologue
	callq	_ZN4core3ops8function6FnOnce9call_once17h29077c37147c5ab1E
	#APP
	#NO_APP
	nop
	addq	$40, %rsp
	retq
	.seh_endproc

	.def	_ZN3std2rt10lang_start17h842969af2410a2abE;
	.scl	2;
	.type	32;
	.endef
	.section	.text,"xr",one_only,_ZN3std2rt10lang_start17h842969af2410a2abE
	.globl	_ZN3std2rt10lang_start17h842969af2410a2abE
	.p2align	4, 0x90
_ZN3std2rt10lang_start17h842969af2410a2abE:
.seh_proc _ZN3std2rt10lang_start17h842969af2410a2abE
	subq	$56, %rsp
	.seh_stackalloc 56
	.seh_endprologue
	movb	%r9b, %al
	movq	%r8, %r9
	movq	%rdx, %r8
	movq	%rcx, 48(%rsp)
	leaq	48(%rsp), %rcx
	leaq	__unnamed_1(%rip), %rdx
	movb	%al, 32(%rsp)
	callq	_ZN3std2rt19lang_start_internal17h522c822308cc94e9E
	movq	%rax, 40(%rsp)
	movq	40(%rsp), %rax
	addq	$56, %rsp
	retq
	.seh_endproc

	.def	_ZN3std2rt10lang_start28_$u7b$$u7b$closure$u7d$$u7d$17hd5cd2e1dc38dde31E;
	.scl	3;
	.type	32;
	.endef
	.section	.text,"xr",one_only,_ZN3std2rt10lang_start28_$u7b$$u7b$closure$u7d$$u7d$17hd5cd2e1dc38dde31E
	.p2align	4, 0x90
_ZN3std2rt10lang_start28_$u7b$$u7b$closure$u7d$$u7d$17hd5cd2e1dc38dde31E:
.seh_proc _ZN3std2rt10lang_start28_$u7b$$u7b$closure$u7d$$u7d$17hd5cd2e1dc38dde31E
	subq	$40, %rsp
	.seh_stackalloc 40
	.seh_endprologue
	movq	(%rcx), %rcx
	callq	_ZN3std10sys_common9backtrace28__rust_begin_short_backtrace17h4dfe358cfb2aa57eE
	callq	_ZN54_$LT$$LP$$RP$$u20$as$u20$std..process..Termination$GT$6report17h35083dbdc5504099E
	movl	%eax, 36(%rsp)
	movl	36(%rsp), %eax
	addq	$40, %rsp
	retq
	.seh_endproc

	.def	_ZN4core3fmt9Arguments6new_v117hfa47292d06cc6772E;
	.scl	3;
	.type	32;
	.endef
	.section	.text,"xr",one_only,_ZN4core3fmt9Arguments6new_v117hfa47292d06cc6772E
	.p2align	4, 0x90
_ZN4core3fmt9Arguments6new_v117hfa47292d06cc6772E:
.seh_proc _ZN4core3fmt9Arguments6new_v117hfa47292d06cc6772E
	subq	$168, %rsp
	.seh_stackalloc 168
	.seh_endprologue
	movq	%r9, 48(%rsp)
	movq	%r8, 56(%rsp)
	movq	%rdx, 64(%rsp)
	movq	%rcx, 72(%rsp)
	movq	%rcx, 80(%rsp)
	movq	208(%rsp), %rax
	movq	%rax, 88(%rsp)
	cmpq	%rax, %r8
	jb	.LBB3_2
	movq	56(%rsp), %rax
	movq	88(%rsp), %rcx
	addq	$1, %rcx
	cmpq	%rcx, %rax
	seta	%al
	andb	$1, %al
	movb	%al, 103(%rsp)
	jmp	.LBB3_3
.LBB3_2:
	movb	$1, 103(%rsp)
.LBB3_3:
	testb	$1, 103(%rsp)
	jne	.LBB3_5
	movq	80(%rsp), %rax
	movq	72(%rsp), %rcx
	movq	88(%rsp), %rdx
	movq	48(%rsp), %r8
	movq	56(%rsp), %r9
	movq	64(%rsp), %r10
	movq	$0, 152(%rsp)
	movq	%r10, (%rcx)
	movq	%r9, 8(%rcx)
	movq	152(%rsp), %r10
	movq	160(%rsp), %r9
	movq	%r10, 16(%rcx)
	movq	%r9, 24(%rcx)
	movq	%r8, 32(%rcx)
	movq	%rdx, 40(%rcx)
	addq	$168, %rsp
	retq
.LBB3_5:
	leaq	104(%rsp), %rcx
	leaq	__unnamed_2(%rip), %rdx
	movl	$1, %r8d
	leaq	__unnamed_3(%rip), %r9
	xorl	%eax, %eax
	movq	$0, 32(%rsp)
	callq	_ZN4core3fmt9Arguments6new_v117hfa47292d06cc6772E
	leaq	__unnamed_4(%rip), %rdx
	leaq	104(%rsp), %rcx
	callq	_ZN4core9panicking9panic_fmt17h94563f1a4f8281d4E
	ud2
	.seh_endproc

	.def	_ZN4core3ops8function6FnOnce40call_once$u7b$$u7b$vtable.shim$u7d$$u7d$17h366e262d6df84104E;
	.scl	3;
	.type	32;
	.endef
	.section	.text,"xr",one_only,_ZN4core3ops8function6FnOnce40call_once$u7b$$u7b$vtable.shim$u7d$$u7d$17h366e262d6df84104E
	.p2align	4, 0x90
_ZN4core3ops8function6FnOnce40call_once$u7b$$u7b$vtable.shim$u7d$$u7d$17h366e262d6df84104E:
.seh_proc _ZN4core3ops8function6FnOnce40call_once$u7b$$u7b$vtable.shim$u7d$$u7d$17h366e262d6df84104E
	subq	$56, %rsp
	.seh_stackalloc 56
	.seh_endprologue
	movq	(%rcx), %rcx
	callq	_ZN4core3ops8function6FnOnce9call_once17h5e1219aeca3142bdE
	movl	%eax, 44(%rsp)
	movl	44(%rsp), %eax
	addq	$56, %rsp
	retq
	.seh_endproc

	.def	_ZN4core3ops8function6FnOnce9call_once17h29077c37147c5ab1E;
	.scl	3;
	.type	32;
	.endef
	.section	.text,"xr",one_only,_ZN4core3ops8function6FnOnce9call_once17h29077c37147c5ab1E
	.p2align	4, 0x90
_ZN4core3ops8function6FnOnce9call_once17h29077c37147c5ab1E:
.seh_proc _ZN4core3ops8function6FnOnce9call_once17h29077c37147c5ab1E
	subq	$40, %rsp
	.seh_stackalloc 40
	.seh_endprologue
	callq	*%rcx
	nop
	addq	$40, %rsp
	retq
	.seh_endproc

	.def	_ZN4core3ops8function6FnOnce9call_once17h5e1219aeca3142bdE;
	.scl	3;
	.type	32;
	.endef
	.section	.text,"xr",one_only,_ZN4core3ops8function6FnOnce9call_once17h5e1219aeca3142bdE
	.p2align	4, 0x90
_ZN4core3ops8function6FnOnce9call_once17h5e1219aeca3142bdE:
.Lfunc_begin0:
.seh_proc _ZN4core3ops8function6FnOnce9call_once17h5e1219aeca3142bdE
	.seh_handler __CxxFrameHandler3, @unwind, @except
	pushq	%rbp
	.seh_pushreg %rbp
	subq	$64, %rsp
	.seh_stackalloc 64
	leaq	64(%rsp), %rbp
	.seh_setframe %rbp, 64
	.seh_endprologue
	movq	$-2, -8(%rbp)
	movq	%rcx, -16(%rbp)
.Ltmp0:
	leaq	-16(%rbp), %rcx
	callq	_ZN3std2rt10lang_start28_$u7b$$u7b$closure$u7d$$u7d$17hd5cd2e1dc38dde31E
.Ltmp1:
	movl	%eax, -20(%rbp)
	jmp	.LBB6_2
.LBB6_2:
	movl	-20(%rbp), %eax
	addq	$64, %rsp
	popq	%rbp
	retq
	.seh_handlerdata
	.long	($cppxdata$_ZN4core3ops8function6FnOnce9call_once17h5e1219aeca3142bdE)@IMGREL
	.section	.text,"xr",one_only,_ZN4core3ops8function6FnOnce9call_once17h5e1219aeca3142bdE
	.seh_endproc
	.def	"?dtor$1@?0?_ZN4core3ops8function6FnOnce9call_once17h5e1219aeca3142bdE@4HA";
	.scl	3;
	.type	32;
	.endef
	.p2align	4, 0x90
"?dtor$1@?0?_ZN4core3ops8function6FnOnce9call_once17h5e1219aeca3142bdE@4HA":
.seh_proc "?dtor$1@?0?_ZN4core3ops8function6FnOnce9call_once17h5e1219aeca3142bdE@4HA"
.LBB6_1:
	movq	%rdx, 16(%rsp)
	pushq	%rbp
	.seh_pushreg %rbp
	subq	$32, %rsp
	.seh_stackalloc 32
	leaq	64(%rdx), %rbp
	.seh_endprologue
	addq	$32, %rsp
	popq	%rbp
	retq
.Lfunc_end0:
	.seh_handlerdata
	.section	.text,"xr",one_only,_ZN4core3ops8function6FnOnce9call_once17h5e1219aeca3142bdE
	.seh_endproc
	.section	.xdata,"dr",associative,_ZN4core3ops8function6FnOnce9call_once17h5e1219aeca3142bdE
	.p2align	2
$cppxdata$_ZN4core3ops8function6FnOnce9call_once17h5e1219aeca3142bdE:
	.long	429065506
	.long	1
	.long	($stateUnwindMap$_ZN4core3ops8function6FnOnce9call_once17h5e1219aeca3142bdE)@IMGREL
	.long	0
	.long	0
	.long	3
	.long	($ip2state$_ZN4core3ops8function6FnOnce9call_once17h5e1219aeca3142bdE)@IMGREL
	.long	56
	.long	0
	.long	1
$stateUnwindMap$_ZN4core3ops8function6FnOnce9call_once17h5e1219aeca3142bdE:
	.long	-1
	.long	"?dtor$1@?0?_ZN4core3ops8function6FnOnce9call_once17h5e1219aeca3142bdE@4HA"@IMGREL
$ip2state$_ZN4core3ops8function6FnOnce9call_once17h5e1219aeca3142bdE:
	.long	.Lfunc_begin0@IMGREL
	.long	-1
	.long	.Ltmp0@IMGREL+1
	.long	0
	.long	.Ltmp1@IMGREL+1
	.long	-1
	.section	.text,"xr",one_only,_ZN4core3ops8function6FnOnce9call_once17h5e1219aeca3142bdE

	.def	_ZN4core3ptr85drop_in_place$LT$std..rt..lang_start$LT$$LP$$RP$$GT$..$u7b$$u7b$closure$u7d$$u7d$$GT$17hf1b7bc4b4a801a1cE;
	.scl	3;
	.type	32;
	.endef
	.section	.text,"xr",one_only,_ZN4core3ptr85drop_in_place$LT$std..rt..lang_start$LT$$LP$$RP$$GT$..$u7b$$u7b$closure$u7d$$u7d$$GT$17hf1b7bc4b4a801a1cE
	.p2align	4, 0x90
_ZN4core3ptr85drop_in_place$LT$std..rt..lang_start$LT$$LP$$RP$$GT$..$u7b$$u7b$closure$u7d$$u7d$$GT$17hf1b7bc4b4a801a1cE:
	retq

	.def	_ZN54_$LT$$LP$$RP$$u20$as$u20$std..process..Termination$GT$6report17h35083dbdc5504099E;
	.scl	3;
	.type	32;
	.endef
	.section	.text,"xr",one_only,_ZN54_$LT$$LP$$RP$$u20$as$u20$std..process..Termination$GT$6report17h35083dbdc5504099E
	.p2align	4, 0x90
_ZN54_$LT$$LP$$RP$$u20$as$u20$std..process..Termination$GT$6report17h35083dbdc5504099E:
	xorl	%eax, %eax
	retq

	.def	_ZN4main4main17hda07c92be1b81a59E;
	.scl	3;
	.type	32;
	.endef
	.section	.text,"xr",one_only,_ZN4main4main17hda07c92be1b81a59E
	.p2align	4, 0x90
_ZN4main4main17hda07c92be1b81a59E:
.seh_proc _ZN4main4main17hda07c92be1b81a59E
	subq	$88, %rsp
	.seh_stackalloc 88
	.seh_endprologue
	leaq	40(%rsp), %rcx
	leaq	__unnamed_5(%rip), %rdx
	movl	$1, %r8d
	leaq	__unnamed_3(%rip), %r9
	xorl	%eax, %eax
	movq	$0, 32(%rsp)
	callq	_ZN4core3fmt9Arguments6new_v117hfa47292d06cc6772E
	leaq	40(%rsp), %rcx
	callq	_ZN3std2io5stdio6_print17hd82ca23f1d065287E
	nop
	addq	$88, %rsp
	retq
	.seh_endproc

	.def	main;
	.scl	2;
	.type	32;
	.endef
	.section	.text,"xr",one_only,main
	.globl	main
	.p2align	4, 0x90
main:
.seh_proc main
	subq	$40, %rsp
	.seh_stackalloc 40
	.seh_endprologue
	movq	%rdx, %r8
	movslq	%ecx, %rdx
	leaq	_ZN4main4main17hda07c92be1b81a59E(%rip), %rcx
	xorl	%r9d, %r9d
	callq	_ZN3std2rt10lang_start17h842969af2410a2abE
	nop
	addq	$40, %rsp
	retq
	.seh_endproc

	.section	.rdata,"dr",one_only,__unnamed_1
	.p2align	3
__unnamed_1:
	.quad	_ZN4core3ptr85drop_in_place$LT$std..rt..lang_start$LT$$LP$$RP$$GT$..$u7b$$u7b$closure$u7d$$u7d$$GT$17hf1b7bc4b4a801a1cE
	.asciz	"\b\000\000\000\000\000\000\000\b\000\000\000\000\000\000"
	.quad	_ZN4core3ops8function6FnOnce40call_once$u7b$$u7b$vtable.shim$u7d$$u7d$17h366e262d6df84104E
	.quad	_ZN3std2rt10lang_start28_$u7b$$u7b$closure$u7d$$u7d$17hd5cd2e1dc38dde31E
	.quad	_ZN3std2rt10lang_start28_$u7b$$u7b$closure$u7d$$u7d$17hd5cd2e1dc38dde31E

	.section	.rdata,"dr",one_only,__unnamed_6
__unnamed_6:
	.ascii	"invalid args"

	.section	.rdata,"dr",one_only,__unnamed_2
	.p2align	3
__unnamed_2:
	.quad	__unnamed_6
	.asciz	"\f\000\000\000\000\000\000"

	.section	.rdata,"dr",one_only,__unnamed_3
	.p2align	3
__unnamed_3:

	.section	.rdata,"dr",one_only,__unnamed_7
__unnamed_7:
	.ascii	"/rustc/69f9c33d71c871fc16ac445211281c6e7a340943\\library\\core\\src\\fmt\\mod.rs"

	.section	.rdata,"dr",one_only,__unnamed_4
	.p2align	3
__unnamed_4:
	.quad	__unnamed_7
	.asciz	"K\000\000\000\000\000\000\000\214\001\000\000\r\000\000"

	.section	.rdata,"dr",one_only,__unnamed_8
__unnamed_8:
	.ascii	"Hello, world!\n"

	.section	.rdata,"dr",one_only,__unnamed_5
	.p2align	3
__unnamed_5:
	.quad	__unnamed_8
	.asciz	"\016\000\000\000\000\000\000"

