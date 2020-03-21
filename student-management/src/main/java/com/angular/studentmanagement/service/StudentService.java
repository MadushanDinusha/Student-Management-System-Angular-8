package com.angular.studentmanagement.service;

import com.angular.studentmanagement.domain.Student;

import java.util.List;
import java.util.Optional;

public interface StudentService {

    void addStudent(Student student);
    List<Student> getAll();
    Optional<Student> getById(long id);
    void deleteById(long id);
    void updateById(Student studentObj, long id);
}
