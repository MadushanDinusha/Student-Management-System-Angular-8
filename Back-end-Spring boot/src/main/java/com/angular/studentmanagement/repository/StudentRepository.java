package com.angular.studentmanagement.repository;

import com.angular.studentmanagement.domain.Student;
import org.springframework.data.jpa.repository.JpaRepository;


public interface StudentRepository extends JpaRepository<Student, Long> {
}
