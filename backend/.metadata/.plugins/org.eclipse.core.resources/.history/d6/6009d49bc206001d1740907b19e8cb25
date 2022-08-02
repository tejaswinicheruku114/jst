package com.demo.project.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

@ExceptionHandler(CustomerAlreadyExists.class)
public ResponseEntity<ErrorMsg> customerAlredayExistsException(CustomerAlreadyExists e) {
ErrorMsg errorMsg=new ErrorMsg();
errorMsg.setMessage(e.getMessage());
return new ResponseEntity<ErrorMsg>(errorMsg,HttpStatus.OK);

}

}